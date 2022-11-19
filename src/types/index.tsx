export type ID = string | number

export type Worker = {
  id: ID
  companyId: ID
  lastName: string
  firstName: string
  position: string
}

export type Company = {
  id: ID
  name: string
  address: string
  staff: Worker[]
}
