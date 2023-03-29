import { ID } from '@types';
import { createSelector } from 'reselect';
import { RootState } from '../index';

// companies-slice
export const allCompaniesInState = (state: RootState) => state.companies.allCompanies;

export const selectedCompaniesInState = (state: RootState) => state.companies.selectedCompanies;

export const selectedWorkersInState = (state: RootState) => state.companies.selectedWorkers;

export const workerIsSelectedInState = (workerID?: ID) => (state: RootState) => {
  const allSelectedWorkers = selectedWorkersInState(state);
  return !!allSelectedWorkers.find((selected) => selected.id === workerID);
};

export const amountWorkersInSelectedCompaniesInState = createSelector(
  selectedCompaniesInState,
  (companies) => {
    const amount = companies.reduce((prev, curr) => prev + curr.staff.length, 0);
    return amount;
  },
);

export const isAllWorkersSelectedInState = createSelector(
  amountWorkersInSelectedCompaniesInState,
  selectedWorkersInState,
  (allWorkers, workers) => workers.length === allWorkers,
);

export const moreThanOneSelectedWorkerInState = (state: RootState) => {
  const allSelectedWorkers = selectedWorkersInState(state);
  return allSelectedWorkers.length > 0;
};

export const moreThanOneWorkerInSelectedCompaniesInState = createSelector(
  amountWorkersInSelectedCompaniesInState,
  (allWorkers) => allWorkers > 1,
);

export const moreThanOneCompanyInState = createSelector(
  allCompaniesInState,
  (allCompanies) => allCompanies.length > 1,
);

export const moreThanOneSelectedCompanyInState = createSelector(
  selectedCompaniesInState,
  (allCompanies) => allCompanies.length > 0,
);

export const isAllCompaniesSelectedInState = createSelector(
  allCompaniesInState,
  selectedCompaniesInState,
  (allCompanies, selectedCompanies) => allCompanies.length === selectedCompanies.length,
);

export const companyIsSelectedInState = (companyID?: ID) => (state: RootState) => {
  const allSelectedCompanies = selectedCompaniesInState(state);
  return !!allSelectedCompanies.find((selected) => selected.id === companyID);
};
