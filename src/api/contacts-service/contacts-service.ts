import { apiProtected } from '@/api';
import {
  ContactsResponse,
  CreateContact,
  DeleteContact,
  GetContactsData,
  UpdateContact,
} from '@/api/contacts-service/types';

export const getContacts: GetContactsData = async () => {
  const { data } = await apiProtected.get<ContactsResponse>(`/contacts`);
  return data;
};

export const createContact: CreateContact = async (contact) => {
  const { data } = await apiProtected.post<ContactsResponse>(`/contacts`, contact);
  return data;
};

export const deleteContact: DeleteContact = async (contactID) => {
  const { data } = await apiProtected.delete<ContactsResponse>(`/contacts/${contactID}`);
  return data;
};

export const updateContact: UpdateContact = async (contact) => {
  const { data } = await apiProtected.patch<ContactsResponse>(
    `/contacts/${contact.id}`,
    contact,
  );
  return data;
};
