import React, { FC } from 'react';
import styled from 'styled-components';

import { TableEditableCellProps } from './types';
import { TableCell } from '../table-cell';

const Input = styled.input`
  max-width: 150px;
`;

export const TableEditableCell:FC<TableEditableCellProps> = ({ isEditMode, value, onChange }) => (
  <TableCell>
    {isEditMode
      ? <Input value={value} onChange={onChange} />
      : value}
  </TableCell>
);
