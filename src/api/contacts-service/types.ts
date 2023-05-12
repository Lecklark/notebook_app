import { Contact } from '@/types';

export type ContactData = Contact & {
  id: string;
};

export type ContactsResponse = ContactData[];

export type GetContactsData = () => Promise<ContactsResponse>;
export type CreateContact = (contact: Contact) => Promise<ContactsResponse>;
export type DeleteContact = (contactID: string) => Promise<ContactsResponse>;
export type UpdateContact = (contact: ContactData) => Promise<ContactsResponse>;
