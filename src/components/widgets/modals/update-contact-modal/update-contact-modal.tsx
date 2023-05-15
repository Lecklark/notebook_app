import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { CreateContactForm, CreateContactFormValues } from '@components/widgets/forms';
import { useRef } from 'react';
import { FormattedMessage } from 'react-intl';

import { useUpdateContact } from '@/api/contacts-service';
import { useModalController } from '@/lib/hooks';
import { MESSAGES } from '@/lib/i18n';
import { useAppSelector } from '@/store/hooks';
import { modalPropsInState } from '@/store/selectors';
import { FormikParams, MODALS } from '@/types';

export const UpdateContactModal = () => {
  const [isOpen, _, closeHandler] = useModalController(MODALS.UPDATE_CONTACT_MODAL);
  const formikRef = useRef<FormikParams<CreateContactFormValues> | null>(null);
  const { mutate: updateContact } = useUpdateContact();
  const contactData = useAppSelector(modalPropsInState);
  const contactID = contactData?.contact.id;
  const contactName = contactData?.contact.fullName;

  const setFormikEntity = (formik: FormikParams<CreateContactFormValues>) => {
    formikRef.current = formik;
  };

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  const onSubmit = (values: CreateContactFormValues) => {
    if (!contactID) {
      return;
    }
    const data = { ...values, id: contactID };
    updateContact(data, {
      onSuccess: () => closeHandler(),
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay />
      <ModalContent w='100%' maxW={{ base: '80%', md: '720px', '2xl': '885px' }}>
        <ModalHeader
          mb='10px'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          fontSize={{ base: '18px', '2xl': '20px' }}
        >
          <FormattedMessage
            id={MESSAGES.UPDATE_MODAL_TITLE}
            values={{ fullName: contactName }}
          />
          <Button variant='solid' fontSize='inherit' onClick={closeHandler}>
            <CloseIcon />
          </Button>
        </ModalHeader>
        <Divider />
        <ModalBody py={7}>
          <CreateContactForm
            initialValues={contactData?.contact}
            setFormikEntity={setFormikEntity}
            onSubmit={onSubmit}
          />
        </ModalBody>
        <ModalFooter pb={10}>
          <Button variant='solid' fontSize='inherit' onClick={handleSubmit} ml='auto'>
            <FormattedMessage id={MESSAGES.UPDATE_TEXT} />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
