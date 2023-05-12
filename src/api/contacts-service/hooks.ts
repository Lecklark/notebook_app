import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { CONTACTS_QUERY_KEY } from '@/lib/constants';
import { Contact } from '@/types';

import { contactService } from './contacts-service';
import { ContactData } from './types';

export const useContacts = () => {
  return useQuery([CONTACTS_QUERY_KEY], contactService.getContacts);
};

export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation((data: Contact) => contactService.createContact(data), {
    onSuccess: () => queryClient.invalidateQueries([CONTACTS_QUERY_KEY]),
  });
}

export function useDeleteContact() {
  const queryClient = useQueryClient();

  return useMutation((id: string) => contactService.deleteContact(id), {
    onSuccess: () => queryClient.invalidateQueries([CONTACTS_QUERY_KEY]),
  });
}

export function useUpdateContact() {
  const queryClient = useQueryClient();

  return useMutation((data: ContactData) => contactService.updateContact(data), {
    onSuccess: () => queryClient.invalidateQueries([CONTACTS_QUERY_KEY]),
  });
}
