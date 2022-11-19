import { Company, ID, Worker } from '../../../../types';

export type AddCompanyPayload = Omit<Company, 'id'>
export type AddWorkerPayload = {
  worker: Omit<Worker, 'id'>
  companyId: ID
}
