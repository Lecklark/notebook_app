import { Box, useToast } from '@chakra-ui/react';
import { FormWrapper } from '@components/widgets/form-wrapper';
import { AuthForm, AuthFormValues } from '@components/widgets/forms';

import { useLogin } from '@/api/auth-service';
import { ROUTES } from '@/lib/constants';
import { MESSAGES, useI18N } from '@/lib/i18n';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/app-slice';

export const Login = () => {
  const [title, btnText, linkText] = useI18N(
    MESSAGES.LOGIN_FORM_TITLE,
    MESSAGES.LOGIN_FORM_BTN,
    MESSAGES.LOGIN_FORM_LINK,
  );
  const { mutate: loginUser } = useLogin();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [errorText] = useI18N(MESSAGES.LOGIN_ERROR);

  const onFormSubmit = async (values: AuthFormValues) => {
    loginUser(values, {
      onSuccess: (tokens) => {
        dispatch(login(tokens));
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
        linkHref={ROUTES.REGISTRATION_PAGE}
      />
    </Box>
  );
};
