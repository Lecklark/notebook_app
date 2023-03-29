import React, { ChangeEvent, memo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  isAllCompaniesSelectedInState,
  moreThanOneCompanyInState,
  moreThanOneSelectedCompanyInState,
} from '@store/selectors';
import {
  deleteSelectedCompanies,
  deselectAllCompanies,
  selectAllCompanies,
} from '@store/slices/companies-slice';
import { HeaderRow, TableCell, TableHead } from '@components/shared/table-components';

export const CompanyTableHeader = memo(() => {
  const checkboxChecked = useAppSelector(isAllCompaniesSelectedInState);
  const showCheckbox = useAppSelector(moreThanOneCompanyInState);
  const showDeleteButton = useAppSelector(moreThanOneSelectedCompanyInState);
  const dispatch = useAppDispatch();

  function checkboxClick(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    if (checked) {
      dispatch(selectAllCompanies());
    } else {
      dispatch(deselectAllCompanies());
    }
  }

  function deleteClick() {
    dispatch(deleteSelectedCompanies());
  }

  return (
    <TableHead>
      <HeaderRow>
        <TableCell>
          {showCheckbox && (
          <input type="checkbox" checked={checkboxChecked} onChange={checkboxClick} />
          )}
        </TableCell>
        <TableCell>
          Название
        </TableCell>
        <TableCell>
          Количество сотрудников
        </TableCell>
        <TableCell>
          Адрес
        </TableCell>
        <TableCell>
          {showDeleteButton && (
          <button type="button" onClick={deleteClick}>
            Удалить
          </button>
          )}
        </TableCell>
      </HeaderRow>
    </TableHead>
  );
});

export default CompanyTableHeader;
