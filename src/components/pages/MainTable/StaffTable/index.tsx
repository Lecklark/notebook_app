import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../store/hooks';
import { selectedCompaniesInState } from '../../../../store/selectors';
import Table from '../../../common/TableComponents/Table';
import StaffTableHeader from './StaffTableHeader';
import StaffTableRow from './StaffTableRow';
import TableRow from '../../../common/TableComponents/TableRow';
import TableCell from '../../../common/TableComponents/TableCell';

const CellForCompanyName = styled(TableCell)`
  font-size: 25px;
  font-weight: 500;
`;

function StaffTable() {
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
}

export default StaffTable;
