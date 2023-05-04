import { useIntl } from 'react-intl';

import { AllMessages } from '@/lib/i18n/types';

export const useI18N = (...args: AllMessages[]) => {
  const intl = useIntl();

  return args.map((id) => intl.formatMessage({ id }));
};
