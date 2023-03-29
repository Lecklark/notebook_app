import React, { ChangeEvent, memo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  isAllWorkersSelectedInState,
  moreThanOneSelectedWorkerInState,
  moreThanOneWorkerInSelectedCompaniesInState,
} from '@store/selectors';
import {
  deleteSelectedWorkers,
  deselectAllWorkers,
  selectAllWorkers,
} from '@store/slices/companies-slice';
import { HeaderRow, TableCell, TableHead } from '@components/shared/table-components';

export const StaffTableHeader = memo(() => {
  const checkboxChecked = useAppSelector(isAllWorkersSelectedInState);
  const showDeleteButton = useAppSelector(moreThanOneSelectedWorkerInState);
  const showCheckbox = useAppSelector(moreThanOneWorkerInSelectedCompaniesInState);

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
          {showCheckbox && (
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
