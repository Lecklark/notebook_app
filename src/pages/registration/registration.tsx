import { Box, useToast } from '@chakra-ui/react';
import { FormWrapper } from '@components/widgets/form-wrapper';
import { AuthForm, AuthFormValues } from '@components/widgets/forms';

import { useRegistration } from '@/api/auth-service';
import { ROUTES } from '@/lib/constants';
import { MESSAGES, useI18N } from '@/lib/i18n';
import { useAppDispatch } from '@/store/hooks';
import { appActions } from '@/store/slices/app-slice';

export const Registration = () => {
  const [title, btnText, linkText] = useI18N(
    MESSAGES.REG_FORM_TITLE,
    MESSAGES.REG_FORM_BTN,
    MESSAGES.REG_FORM_LINK,
  );
  const { mutate: regUser } = useRegistration();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [errorText] = useI18N(MESSAGES.REG_ERROR);

  const onFormSubmit = async (values: AuthFormValues) => {
    regUser(values, {
      onSuccess: (tokens) => {
        dispatch(appActions.login(tokens));
      },
      onError: () =>
        toast({
          title: errorText,
          status: 'error',
          duration: 5000,
        }),
    });
  };

  return (
    <Box flexGrow={1} display='flex' alignItems='center' justifyContent='center'>
      <FormWrapper
        title={title}
        linkText={linkText}
        formComponent={<AuthForm btnText={btnText} onSubmit={onFormSubmit} />}
        linkHref={ROUTES.LOGIN_PAGE}
      />
    </Box>
  );
};
