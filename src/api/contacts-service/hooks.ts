import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';

import { CONTACTS_QUERY_KEY } from '@/lib/constants';
import { createQueryString } from '@/lib/utils';
import { Contact, FilterType } from '@/types';

import { contactService } from './contacts-service';
import { ContactData } from './types';

export const useContacts = (filter: FilterType = {}) => {
  const queryKey = CONTACTS_QUERY_KEY + createQueryString(filter);
  return useQuery([queryKey], () => contactService.getContacts(filter), {
    keepPreviousData: true,
  });
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
