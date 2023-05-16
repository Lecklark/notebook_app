import { lazy, Suspense } from 'react';

const CreateContactModal = lazy(() => import('./create-contact-modal'));
const DeleteContactModal = lazy(() => import('./delete-contact-modal'));
const UpdateContactModal = lazy(() => import('./update-contact-modal'));

export const ModalsContainer = () => {
  return (
    <Suspense fallback={null}>
      <CreateContactModal />
      <DeleteContactModal />
      <UpdateContactModal />
    </Suspense>
  );
};
