import { Box } from '@chakra-ui/react';
import { FormikInput } from '@components/shared/formik-components';
import { FormikProvider, useFormik } from 'formik';
import { FC, useEffect } from 'react';
import { useIntl } from 'react-intl';

import { MESSAGES, useI18N } from '@/lib/i18n';
import { setContactFormSchema } from '@/lib/schemas';

import { CreateContactFormProps, CreateContactFormValues } from './types';

const formInitialValues: CreateContactFormValues = {
  phone: '',
  address: '',
  email: '',
  fullName: '',
};

export const CreateContactForm: FC<CreateContactFormProps> = ({
  initialValues = formInitialValues,
  setFormikEntity,
  onSubmit,
}) => {
  const [fullNameLabel, phoneLabel, emailLabel, addressLabel] = useI18N(
    MESSAGES.FULLNAME_INPUT_LABEL,
    MESSAGES.PHONE_INPUT_LABEL,
    MESSAGES.CONTACT_EMAIL_INPUT_LABEL,
    MESSAGES.ADDRESS_INPUT_LABEL,
  );
  const intl = useIntl();
  const submitHandler = (values: CreateContactFormValues) => {
    if (typeof onSubmit === 'function') {
      onSubmit(values);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: setContactFormSchema(intl),
    onSubmit: submitHandler,
  });

  useEffect(() => {
    if (typeof setFormikEntity === 'function') {
      setFormikEntity(formik);
    }
  }, []);

  return (
    <Box
      display='grid'
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gridColumnGap='20px'
      gridRowGap='10px'
    >
      <FormikProvider value={formik}>
        <FormikInput name='fullName' label={fullNameLabel} />
        <FormikInput name='phone' label={phoneLabel} />
        <FormikInput name='email' label={emailLabel} />
        <FormikInput name='address' label={addressLabel} />
      </FormikProvider>
    </Box>
  );
};
