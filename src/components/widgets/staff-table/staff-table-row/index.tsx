import React, {
  useState, ChangeEvent, FC, memo,
} from 'react';
import { useForm } from '@lib/hooks';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { workerIsSelectedInState } from '@store/selectors';
import {
  addWorker,
  deselectWorker,
  selectWorker,
  updateWorker,
} from '@store/slices/companies-slice';
import {
  ButtonsCell,
  TableCell,
  TableEditableCell,
  TableRow,
} from '@components/shared/table-components';
import { StaffFormValues, StaffTableRowProps } from './types';

export const StaffTableRow: FC<StaffTableRowProps> = memo(({ worker, companyId }) => {
  const isSelected = useAppSelector(workerIsSelectedInState(worker?.id));
  const dispatch = useAppDispatch();
  const isAddWorkerRow = !worker;

  const formInitialValues: StaffFormValues = {
    firstName: worker?.firstName ? worker.firstName : '',
    lastName: worker?.lastName ? worker.lastName : '',
    position: worker?.position ? worker.position : '',
  };

  const { values, changeFieldValue, resetForm } = useForm<StaffFormValues>(formInitialValues);

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
          ...values,
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
        ...values,
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
      <TableEditableCell isEditMode={isEditMode} value={values.firstName} onChange={changeFieldValue('firstName')} />
      <TableEditableCell isEditMode={isEditMode} value={values.lastName} onChange={changeFieldValue('lastName')} />
      <TableEditableCell isEditMode={isEditMode} value={values.position} onChange={changeFieldValue('position')} />
      <ButtonsCell isEditMode={isEditMode} onClick={saveClickHandler} />
    </TableRow>
  );
});
