import { ID } from '@types';
import { RootState } from '../index';

// companies-slice
export const allCompaniesInState = (state: RootState) => state.companies.allCompanies;
export const selectedCompaniesInState = (state: RootState) => state.companies.selectedCompanies;
export const selectedWorkersInState = (state: RootState) => state.companies.selectedWorkers;

export const workerIsSelectedInState = (workerID?: ID) => (state: RootState) => {
  const allSelectedWorkers = state.companies.selectedWorkers;
  return !!allSelectedWorkers.find((selected) => selected.id === workerID);
};
