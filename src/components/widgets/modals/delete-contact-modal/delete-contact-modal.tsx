import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import { useDeleteContact } from '@/api/contacts-service';
import { useModalController } from '@/lib/hooks';
import { MESSAGES } from '@/lib/i18n';
import { useAppSelector } from '@/store/hooks';
import { modalPropsInState } from '@/store/selectors';
import { MODALS } from '@/types';

export const DeleteContactModal = () => {
  const { mutate: deleteContact } = useDeleteContact();
  const [isOpen, _, onClose] = useModalController(MODALS.DELETE_CONTACT_MODAL);
  const props = useAppSelector(modalPropsInState);
  const contactID = props?.contact.id;
  const contactName = props?.contact.fullName;

  function deleteHandler() {
    if (contactID) {
      deleteContact(contactID, {
        onSuccess: () => onClose(),
      });
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent w='100%' maxW={{ base: '288px', md: '350px', '2xl': '550px' }} p={5}>
        <ModalHeader mb='10px'>
          <FormattedMessage
            id={MESSAGES.DELETE_MODAL_TITLE}
            values={{ fullName: contactName }}
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalFooter display='grid' gridTemplateColumns='1fr 1fr' gridColumnGap='8px'>
          <Button onClick={onClose}>
            <FormattedMessage id={MESSAGES.CANCEL_TEXT} />
          </Button>
          <Button onClick={deleteHandler}>
            <FormattedMessage id={MESSAGES.DELETE_TEXT} />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
