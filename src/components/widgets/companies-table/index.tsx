import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@store/hooks';
import { allCompaniesInState } from '@store/selectors';
import { Table } from '@components/shared/table-components';
import CompanyTableHeader from '@components/widgets/companies-table/company-table-header';
import CompanyTableRow from '@components/widgets/companies-table/company-table-row';

const LastRowWrapper = styled.tbody`
  position: sticky;
  bottom: 0;
  background-color: rgb(252, 251, 248);
`;

const CompaniesTable = () => {
  const companiesArray = useAppSelector(allCompaniesInState);

  return (
    <Table>
      <CompanyTableHeader />
      <tbody>
        {companiesArray.map((company) => (
          <CompanyTableRow company={company} key={`${company.id}-main`} />
        ))}
      </tbody>
      <LastRowWrapper>
        <CompanyTableRow />
      </LastRowWrapper>
    </Table>
  );
};

export default CompaniesTable;
