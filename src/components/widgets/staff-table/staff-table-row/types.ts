import { ID, Worker } from '@types';

export type StaffTableRowProps = {
  worker?: Worker,
  companyId: ID
}

export type StaffFormValues = {
  firstName: string,
  lastName: string,
  position: string
}
