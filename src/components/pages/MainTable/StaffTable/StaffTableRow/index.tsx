import React, { useState, ChangeEvent } from 'react';
import { ID, Worker } from '../../../../../types';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { selectedWorkersInState } from '../../../../../store/selectors';
import {
  addWorker,
  deselectWorker,
  selectWorker,
  updateWorker,
} from '../../../../../store/slices/companiesSlice';
import TableRow from '../../../../common/TableComponents/TableRow';
import TableCell from '../../../../common/TableComponents/TableCell';
import TableEditableCell from '../../../../common/TableComponents/TableEditableCell';
import useForm from '../../../../../features/hooks/useForm';
import ButtonsCell from '../../UI/ButtonsCell';

export interface StaffTableRowProps {
  worker?: Worker,
  companyId: ID
}

export interface IForm {
  firstName: string,
  lastName: string,
  position: string
}

function StaffTableRow({ worker, companyId }:StaffTableRowProps) {
  const selectedWorkers = useAppSelector(selectedWorkersInState);
  const isSelected = !!selectedWorkers.find((selected) => selected.id === worker?.id);
  const dispatch = useAppDispatch();
  const isAddWorkerRow = !worker;

  const { values: state, changeFieldValue, resetForm } = useForm<IForm>({
    firstName: worker?.firstName ? worker.firstName : '',
    lastName: worker?.lastName ? worker.lastName : '',
    position: worker?.position ? worker.position : '',
  });

  const [isEditMode, setEditMode] = useState<boolean>(isAddWorkerRow);

  function checkboxClickHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked;
    if (isAddWorkerRow) return;
    if (value) {
      dispatch(selectWorker(worker));
    } else {
      dispatch(deselectWorker(worker));
    }
  }

  function saveClickHandler() {
    if (isAddWorkerRow) {
      const toSend = {
        worker: {
          companyId,
          ...state,
        },
        companyId,
      };
      dispatch(addWorker(toSend));
      resetForm();
      return;
    }
    if (isEditMode) {
      const updatedWorker = {
        ...worker,
        ...state,
      };
      dispatch(updateWorker(updatedWorker));
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  }

  return (
    <TableRow selected={isSelected}>
      <TableCell>
        {!isAddWorkerRow && (
          <input type="checkbox" checked={isSelected} onChange={checkboxClickHandler} />
        )}
      </TableCell>
      <TableEditableCell isEditMode={isEditMode} value={state.firstName} onChange={changeFieldValue('firstName')} />
      <TableEditableCell isEditMode={isEditMode} value={state.lastName} onChange={changeFieldValue('lastName')} />
      <TableEditableCell isEditMode={isEditMode} value={state.position} onChange={changeFieldValue('position')} />
      <ButtonsCell isEditMode={isEditMode} onClick={saveClickHandler} />
    </TableRow>
  );
}

export default StaffTableRow;
