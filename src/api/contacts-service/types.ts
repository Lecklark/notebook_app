import { Contact, FilterType } from '@/types';

export type ContactData = Contact & {
  id: string;
};

export type ContactFullData = ContactData & {
  createdAt: Date;
  updatedAt: Date;
};

export type ContactsResponse = ContactFullData[];

export type GetContactsData = (filter?: FilterType) => Promise<ContactsResponse>;
export type CreateContact = (contact: Contact) => Promise<ContactsResponse>;
export type DeleteContact = (contactID: string) => Promise<ContactsResponse>;
export type UpdateContact = (contact: ContactData) => Promise<ContactsResponse>;
