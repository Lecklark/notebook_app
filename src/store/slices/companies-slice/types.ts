import { Company, ID, Worker } from '@types';

export interface CompaniesState {
  selectedCompanies: Company[]
  allCompanies: Company[]
  selectedWorkers: Worker[]
}

export type AddCompanyPayload = Omit<Company, 'id'>
export type AddWorkerPayload = {
  worker: Omit<Worker, 'id'>
  companyId: ID
}
