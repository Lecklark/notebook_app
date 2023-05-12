import { IntlShape } from 'react-intl';
import * as yup from 'yup';

import { EMAIL_REG_EXP } from '@/lib/constants';
import { MESSAGES } from '@/lib/i18n';

export const setAuthFormSchema = (intl: IntlShape) => {
  const requiredFieldMessage = intl.formatMessage({ id: MESSAGES.REQUIRED_FIELD });
  const invalidFormatMessage = intl.formatMessage({ id: MESSAGES.INVALID_FORMAT });

  return yup.object().shape({
    password: yup.string().trim().required(requiredFieldMessage),
    email: yup
      .string()
      .required(requiredFieldMessage)
      .trim()
      .matches(EMAIL_REG_EXP, invalidFormatMessage),
  });
};
