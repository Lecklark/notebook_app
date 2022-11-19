import styled from 'styled-components';

const TableRow = styled('tr')<{selected?: boolean}>`
 background-color: ${(props) => (props.selected ? 'green' : 'white')};
  border-top: 1px solid grey;
`;

export default TableRow;
