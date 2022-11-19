import React from 'react';
import styled from 'styled-components';
import MainTable from '../../components/pages/MainTable';

const PageWrapper = styled.section`
  padding: 50px;
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <PageWrapper>
      <MainTable />
    </PageWrapper>
  );
}

export default Main;
