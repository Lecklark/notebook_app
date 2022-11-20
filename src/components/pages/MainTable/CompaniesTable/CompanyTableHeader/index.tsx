import React, { ChangeEvent } from 'react';
import TableCell from '../../../../common/TableComponents/TableCell';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { allCompaniesInState, selectedCompaniesInState } from '../../../../../store/selectors';
import {
  deleteSelectedCompanies,
  deselectAllCompanies,
  selectAllCompanies,
} from '../../../../../store/slices/companiesSlice';
import TableHead from '../../../../common/TableComponents/TableHead';
import HeaderRow from '../../../../common/TableComponents/HeaderRow';

function CompanyTableHeader() {
  const companiesArray = useAppSelector(allCompaniesInState);
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const checkboxChecked = companiesArray.length === selectedCompanies.length;
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
          {companiesArray.length > 1 && (
          <input type="checkbox" checked={checkboxChecked} onChange={checkboxClick} />
          )}
        </TableCell>
        <TableCell>
          Название
        </TableCell>
        <TableCell>
          Количество
        </TableCell>
        <TableCell>
          Адрес
        </TableCell>
        <TableCell>
          {selectedCompanies.length > 0 && (
          <button type="button" onClick={deleteClick}>
            Удалить
          </button>
          )}
        </TableCell>
      </HeaderRow>
    </TableHead>
  );
}

export default CompanyTableHeader;
