import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { allCompaniesInState } from '../../../../store/selectors';
import CompanyTableRow from './CompanyTableRow';
import Table from '../../../common/TableComponents/Table';
import CompanyTableHeader from './CompanyTableHeader';

function CompaniesTable() {
  const companiesArray = useAppSelector(allCompaniesInState);

  return (
    <Table>
      <CompanyTableHeader />
      <tbody>
        {companiesArray.map((company) => (
          <CompanyTableRow company={company} key={`${company.id}-main`} />
        ))}
        <CompanyTableRow />
      </tbody>
    </Table>
  );
}

export default CompaniesTable;
