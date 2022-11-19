import React from 'react';
import styled from 'styled-components';
import CompaniesTable from './CompaniesTable';
import StaffTable from './StaffTable';

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  max-width: 90vw;
  overflow: auto;
  margin: auto;
  align-items: flex-start;
`;

function MainTable() {
  return (
    <TableWrapper>
      <CompaniesTable />
      <StaffTable />
    </TableWrapper>
  );
}

export default MainTable;
