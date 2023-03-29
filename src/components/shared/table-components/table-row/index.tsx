import styled from 'styled-components';
import { TableRowProps } from './types';

export const TableRow = styled('tr')<TableRowProps>`
  background-color: ${(props) => (props.selected ? '#EFEADD' : 'inherit')};
  border-top: 1px solid grey;
`;
