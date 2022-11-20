import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import TableCell from '../TableCell';

export interface TableEditableCellProps {
  isEditMode: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = styled.input`
  max-width: 150px;
`;

function TableEditableCell({ isEditMode, value, onChange }:TableEditableCellProps) {
  return (
    <TableCell>
      {isEditMode
        ? <Input value={value} onChange={onChange} />
        : value}
    </TableCell>
  );
}

export default TableEditableCell;
