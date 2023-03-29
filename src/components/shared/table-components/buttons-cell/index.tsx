import React, { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as EditIcon } from '@assets/icons/edit_icon.svg';
import { ReactComponent as SaveIcon } from '@assets/icons/save_icon.svg';
import { TableCell } from '../table-cell';
import { ButtonsCellProps } from './types';

const ButtonsWrapper = styled.div`
  cursor: pointer;
`;

export const ButtonsCell:FC<ButtonsCellProps> = ({ isEditMode, onClick }) => (
  <TableCell align="center">
    <ButtonsWrapper onClick={onClick}>
      {isEditMode ? (
        <SaveIcon width="30px" height="30px" />
      )
        : (
          <EditIcon width="30px" height="30px" />
        )}
    </ButtonsWrapper>
  </TableCell>
);
