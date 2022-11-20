import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../store/hooks';
import { allCompaniesInState } from '../../../../store/selectors';
import CompanyTableRow from './CompanyTableRow';
import Table from '../../../common/TableComponents/Table';
import CompanyTableHeader from './CompanyTableHeader';

const LastRowWrapper = styled.tbody`
  position: sticky;
  bottom: 0px;
  background-color: rgb(252, 251, 248);
`;

function CompaniesTable() {
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
}

export default CompaniesTable;
