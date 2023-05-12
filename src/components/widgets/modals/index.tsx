import { CreateContactModal } from './create-contact-modal';
import { DeleteContactModal } from './delete-contact-modal';
import { UpdateContactModal } from './update-contact-modal';

export const ModalsContainer = () => {
  return (
    <>
      <CreateContactModal />
      <DeleteContactModal />
      <UpdateContactModal />
    </>
  );
};
