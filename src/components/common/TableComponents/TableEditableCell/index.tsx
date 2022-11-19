import React, { ChangeEvent } from 'react';
import TableCell from '../TableCell';

export interface TableEditableCellProps {
  isEditMode: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function TableEditableCell({ isEditMode, value, onChange }:TableEditableCellProps) {
  return (
    <TableCell>
      {isEditMode
        ? <input value={value} onChange={onChange} />
        : value}
    </TableCell>
  );
}

export default TableEditableCell;
