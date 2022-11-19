import React, { ChangeEvent } from 'react';
import TableRow from '../../../../common/TableComponents/TableRow';
import TableCell from '../../../../common/TableComponents/TableCell';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { allCompaniesInState, selectedCompaniesInState } from '../../../../../store/selectors';
import {
  deleteSelectedCompanies,
  deselectAllCompanies,
  selectAllCompanies,
} from '../../../../../store/slices/companiesSlice';

function StaffTableHeader() {
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
    <thead>
      <TableRow>
        <TableCell>
          {companiesArray.length > 1 && (
          <input type="checkbox" checked={checkboxChecked} onChange={checkboxClick} />
          )}
        </TableCell>
        <TableCell>
          Имя
        </TableCell>
        <TableCell>
          Фамилия
        </TableCell>
        <TableCell>
          Должность
        </TableCell>
        <TableCell>
          {selectedCompanies.length > 0 && (
          <button type="button" onClick={deleteClick}>
            Удалить
          </button>
          )}
        </TableCell>
      </TableRow>
    </thead>
  );
}

export default StaffTableHeader;
