import {useMutation, useQuery} from "@tanstack/react-query";
import {createContact, getContacts} from "../../api/contacts";
import {IContact} from "../../types";

export function useContacts( queryOption = {}) {
    return useQuery(['contacts'], () => getContacts(), {...queryOption})
}

export function useCreateContact() {
    return useMutation(['contacts'],(data:IContact)=>createContact(data));
}