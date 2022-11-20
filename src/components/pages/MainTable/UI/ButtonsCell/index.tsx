import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EditIcon } from '../../../../../assets/icons/edit_icon.svg';
import { ReactComponent as SaveIcon } from '../../../../../assets/icons/save_icon.svg';
import TableCell from '../../../../common/TableComponents/TableCell';

export interface ButtonsCellProps {
  isEditMode: boolean,
  onClick: ()=>void
}

const ButtonsWrapper = styled.div`
  cursor: pointer;
`;

function ButtonsCell({ isEditMode, onClick }:ButtonsCellProps) {
  return (
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
}

export default ButtonsCell;
