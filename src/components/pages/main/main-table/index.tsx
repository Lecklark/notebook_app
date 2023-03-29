import React from 'react';
import styled from 'styled-components';
import CompaniesTable from '@components/widgets/companies-table';
import { StaffTable } from '@components/widgets/staff-table';

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 95vw;
  margin: auto;
  align-items: flex-start;
  background-color: rgb(244, 241, 232);
  overflow: hidden;
  gap: 20px;
`;

const TableScrollWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  position: relative;
  flex: 0 0 50%;
  background-color: #fff;
  border-radius: 10px;
`;

export const MainTable = () => (
  <TableWrapper>
    <TableScrollWrapper>
      <CompaniesTable />
    </TableScrollWrapper>
    <TableScrollWrapper>
      <StaffTable />
    </TableScrollWrapper>
  </TableWrapper>
);

export default MainTable;
