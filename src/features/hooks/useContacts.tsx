import {useMutation, useQuery} from "@tanstack/react-query";
import {contactsQuery, createContact, deleteContact, getContacts} from "../../api/contacts";
import {IContact} from "../../types";
import {useMemo} from "react";

export function useContacts( query:contactsQuery, queryOption = {}) {

    const queryKeys = useMemo(() => {
        const array = ['contacts'];
        Object.keys(query).forEach(key => {
            if(query[key]) {
                array.push(query[key]);
            }
        });
        return array;
    }, [query]);

    return useQuery(['contacts',queryKeys], () => getContacts(query), {...queryOption})
}

export function useCreateContact() {
    return useMutation(['contacts'],(data:IContact)=>createContact(data));
}

export function useDeleteContact() {
    return useMutation(['contacts'],(id:number)=>deleteContact(id));
}