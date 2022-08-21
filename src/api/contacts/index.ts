import {IContact} from "../../types";
import {api} from "../index";

export const getContacts = async () => {
    try{
        const {data}:{data:IContact[]} = await api.get('/api/contacts');
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