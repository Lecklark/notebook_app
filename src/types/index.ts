import { useFormik } from 'formik';

import { ContactData } from '@/api/contacts-service/types';

export interface AuthUser {
  email: string;
  password: string;
}

export interface Contact {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

// eslint-disable-next-line prettier/prettier
export type FormikParams<T> = ReturnType<typeof useFormik<T>>;

export enum MODALS {
  CREATE_CONTACT_MODAL = 'CREATE_CONTACT_MODAL',
  DELETE_CONTACT_MODAL = 'DELETE_CONTACT_MODAL',
  UPDATE_CONTACT_MODAL = 'UPDATE_CONTACT_MODAL',
}

export type AllModals = keyof Record<MODALS, string>;

type DeleteContactModalProps = {
  contact: ContactData;
};

type UpdateContactModalProps = {
  contact: ContactData;
};

export type ModalsProps = DeleteContactModalProps | UpdateContactModalProps | null;

export type FilterType = {
  [key: string]: any;
};
