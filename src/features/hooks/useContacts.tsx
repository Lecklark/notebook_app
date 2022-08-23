import {useMutation, useQuery} from "@tanstack/react-query";
import {contactsQuery, createContact, deleteContact, getContacts, updateContact} from "../../api/contacts";
import {IContact} from "../../types";
import {useMemo} from "react";

export const BASE_CONTACT_QUERY_KEY = 'contacts';

export function useContacts( query:contactsQuery, queryOption = {}) {

    const queryKeys = useMemo(() => {
        const array = [BASE_CONTACT_QUERY_KEY];
        Object.keys(query).forEach(key => {
            if(query[key]) {
                array.push(query[key]);
            }
        });
        return array;
    }, [query]);

    return useQuery(queryKeys, () => getContacts(query), {...queryOption})
}

export function useCreateContact() {
    return useMutation([BASE_CONTACT_QUERY_KEY],(data:IContact)=>createContact(data));
}

export function useUpdateContact() {
    return useMutation([BASE_CONTACT_QUERY_KEY],({contact,id}:{contact:IContact,id:number})=>updateContact(contact,id));
}

export function useDeleteContact() {
    return useMutation([BASE_CONTACT_QUERY_KEY],(id:number)=>deleteContact(id));
}