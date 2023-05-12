import { Box, Button } from '@chakra-ui/react';
import { FormikInput, FormikPasswordInput } from '@components/shared/formik-components';
import { FormikProvider, useFormik } from 'formik';
import { FC } from 'react';
import { useIntl } from 'react-intl';

import { MESSAGES, useI18N } from '@/lib/i18n';
import { setAuthFormSchema } from '@/lib/schemas';

import { AuthFormProps, AuthFormValues } from './types';

const initialValues: AuthFormValues = { email: '', password: '' };

export const AuthForm: FC<AuthFormProps> = ({ btnText, onSubmit }) => {
  const intl = useIntl();

  const formik = useFormik({
    initialValues,
    validationSchema: setAuthFormSchema(intl),
    onSubmit: submitHandler,
  });

  const [emailLabel, passwordLabel] = useI18N(
    MESSAGES.EMAIL_INPUT_LABEL,
    MESSAGES.PASSWORD_INPUT_LABEL,
  );

  function submitHandler(values: AuthFormValues) {
    onSubmit(values);
  }

  const submitForm = formik.submitForm;

  return (
    <Box display='flex' flexDir='column' alignItems='center' gridGap='20px'>
      <FormikProvider value={formik}>
        <FormikInput name='email' label={emailLabel} />
        <FormikPasswordInput name='password' label={passwordLabel} />
        <Button w={['70%', '40%']} mt='30px' onClick={submitForm}>
          {btnText}
        </Button>
      </FormikProvider>
    </Box>
  );
};
