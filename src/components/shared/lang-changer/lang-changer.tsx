import { Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { AllLocales, LOCALES } from '@/lib/i18n';
import { useAppDispatch } from '@/store/hooks';
import { langInState } from '@/store/selectors';
import { appActions } from '@/store/slices/app-slice';

export const LangChanger = () => {
  const currentLang = useSelector(langInState);
  const dispatch = useAppDispatch();

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as AllLocales;
    dispatch(appActions.changeLang(value));
  };

  return (
    <Select value={currentLang} onChange={changeHandler}>
      {Object.entries(LOCALES).map(([key, value]) => (
        <option key={key} value={value}>
          {key}
        </option>
      ))}
    </Select>
  );
};
