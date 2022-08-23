import {IContact} from "../../types";
import {api} from "../index";

export type contactsQuery = {
    search?:string,
    [key:string]:any,
}

export interface contactsResponse extends IContact {
    id:number;
}

export const getContacts = async ({search}:contactsQuery) => {
    try{
        const {data}:{data:contactsResponse[]} = await api.get('/api/contacts',{
            params:{
                q:search
            }
        });
        return data
    } catch (e) {
        throw e
    }
}

export const createContact = async (contact:IContact) => {
    try{
        const {data}:{data:IContact[]} = await api.post('/api/contacts',contact);
        return data
    }catch (e) {
        throw e
    }
}

export const updateContact = async (contact:IContact,contactId:number) => {
    try{
        const {data}:{data:IContact[]} = await api.put(`/api/contacts/${contactId}`,contact);
        return data
    }catch (e) {
        throw e
    }
}

export const deleteContact = async (contactId:number) => {
    try{
        const {data}:{data:IContact[]} = await api.delete(`/api/contacts/${contactId}`);
        return data
    }catch (e) {
        throw e
    }
}