import { Contact, FormikParams } from '@/types';

export type CreateContactFormValues = Contact;

export type CreateContactFormProps = {
  setFormikEntity?: (entity: FormikParams<CreateContactFormValues>) => void;
  initialValues?: CreateContactFormValues;
  onSubmit?: (values: CreateContactFormValues) => void;
};
