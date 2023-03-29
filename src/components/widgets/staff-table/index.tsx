import React from 'react';
import styled from 'styled-components';
import { Table, TableCell, TableRow } from '@components/shared/table-components';
import { useAppSelector } from '@store/hooks';
import { selectedCompaniesInState } from '@store/selectors';
import { StaffTableHeader } from './staff-table-header';
import { StaffTableRow } from './staff-table-row';

const CellForCompanyName = styled(TableCell)`
  font-size: 25px;
  font-weight: 500;
`;

export const StaffTable = () => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);

  if (!selectedCompanies.length) return null;

  return (
    <Table>
      <StaffTableHeader />

      {selectedCompanies.map((company) => (
        <tbody key={company.id}>
          <TableRow>
            <TableCell />
            <CellForCompanyName>
              Компания:
              {' '}
              {company.name.toUpperCase()}
            </CellForCompanyName>
          </TableRow>
          {company?.staff?.map((worker) => (
            <StaffTableRow worker={worker} companyId={company.id} key={`${worker.id}-${company.id}-main`} />
          ))}
          <StaffTableRow companyId={company.id} />
        </tbody>
      ))}

    </Table>
  );
};
