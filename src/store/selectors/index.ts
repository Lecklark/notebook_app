import { RootState } from '../index';

// companiesSlice
export const allCompaniesInState = (state: RootState) => state.companies.allCompanies;
export const selectedCompaniesInState = (state: RootState) => state.companies.selectedCompanies;
export const selectedWorkersInState = (state: RootState) => state.companies.selectedWorkers;
