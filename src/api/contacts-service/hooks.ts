import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { CONTACTS_QUERY_KEY } from '@/lib/constants';
import { Contact } from '@/types';

import {
  createContact,
  deleteContact,
  getContacts,
  updateContact,
} from './contacts-service';
import { ContactData } from './types';

export const useContacts = () => {
  return useQuery([CONTACTS_QUERY_KEY], getContacts);
};

export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation((data: Contact) => createContact(data), {
    onSuccess: () => queryClient.invalidateQueries([CONTACTS_QUERY_KEY]),
  });
}

export function useDeleteContact() {
  const queryClient = useQueryClient();

  return useMutation((id: string) => deleteContact(id), {
    onSuccess: () => queryClient.invalidateQueries([CONTACTS_QUERY_KEY]),
  });
}

export function useUpdateContact() {
  const queryClient = useQueryClient();

  return useMutation((data: ContactData) => updateContact(data), {
    onSuccess: () => queryClient.invalidateQueries([CONTACTS_QUERY_KEY]),
  });
}
