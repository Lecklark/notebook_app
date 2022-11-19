import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { allCompaniesInState } from '../../../../store/selectors';
import CompanyTableRow from '../CompaniesTable/CompanyTableRow';
import Table from '../../../common/TableComponents/Table';
import StaffTableHeader from './StaffTableHeader';
import StaffTableRow from './StaffTableRow';

function StaffTable() {
  const companiesArray = useAppSelector(allCompaniesInState);

  return (
    <Table>
      <StaffTableHeader />
      <tbody>
        {companiesArray.map((company) => (
          <StaffTableRow company={company} key={`${company.id}-main`} />
        ))}
        <CompanyTableRow />
      </tbody>
    </Table>
  );
}

export default StaffTable;
