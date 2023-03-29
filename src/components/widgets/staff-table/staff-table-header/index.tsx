import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectedCompaniesInState, selectedWorkersInState } from '@store/selectors';
import {
  deleteSelectedWorkers,
  deselectAllWorkers,
  selectAllWorkers,
} from '@store/slices/companies-slice';
import { HeaderRow, TableCell, TableHead } from '@components/shared/table-components';

export const StaffTableHeader = () => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);
  const selectedWorkers = useAppSelector(selectedWorkersInState);
  const totalWorkersAmount = selectedCompanies.reduce((prev, curr) => prev + curr.staff.length, 0);
  const checkboxChecked = selectedWorkers.length === totalWorkersAmount;
  const dispatch = useAppDispatch();

  function checkboxClick(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target;
    if (checked) {
      dispatch(selectAllWorkers());
    } else {
      dispatch(deselectAllWorkers());
    }
  }

  function deleteClick() {
    dispatch(deleteSelectedWorkers());
  }

  return (
    <TableHead>
      <HeaderRow>
        <TableCell>
          {totalWorkersAmount > 1 && (
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
          {selectedWorkers.length > 0 && (
          <button type="button" onClick={deleteClick}>
            Удалить
          </button>
          )}
        </TableCell>
      </HeaderRow>
    </TableHead>
  );
};
