import { Company } from '../../../../types';

export type AddCompanyPayload = Omit<Company, 'id'>
