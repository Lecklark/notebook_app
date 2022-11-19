import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectedCompaniesInState } from '../../../../store/selectors';
import Table from '../../../common/TableComponents/Table';
import StaffTableHeader from './StaffTableHeader';
import StaffTableRow from './StaffTableRow';
import TableRow from '../../../common/TableComponents/TableRow';
import TableCell from '../../../common/TableComponents/TableCell';

function StaffTable() {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);

  return (
    <Table>
      <StaffTableHeader />

      {selectedCompanies.map((company) => (
        <tbody key={company.id}>
          <TableRow>
            <TableCell />
            <TableCell>
              {company.name}
            </TableCell>
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
