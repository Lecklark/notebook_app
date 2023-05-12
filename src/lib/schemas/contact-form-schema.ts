import { IntlShape } from 'react-intl';
import * as yup from 'yup';

import { EMAIL_REG_EXP } from '@/lib/constants';
import { MESSAGES } from '@/lib/i18n';

export const setContactFormSchema = (intl: IntlShape) => {
  const invalidFormatMessage = intl.formatMessage({ id: MESSAGES.INVALID_FORMAT });

  return yup.object().shape({
    phone: yup.string(),
    email: yup.string().trim().matches(EMAIL_REG_EXP, invalidFormatMessage),
    fullName: yup.string(),
    address: yup.string(),
  });
};
