import {FC} from "react";
import {
    Button,
    IconButton,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";

interface DeleteModalProps {
    title: string,
    deleteBtnHandler: () => void,
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

const DeleteModal: FC<DeleteModalProps> = ({
                                               title,
                                               deleteBtnHandler,
                                               isOpen,
                                               onOpen,
                                               onClose
                                           }) => {

    return (
        <>
            <IconButton
                aria-label='deleteIcon'
                icon={<DeleteIcon color='red.500'/>}
                variant='unstyled'
                onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
                <ModalOverlay/>
                <ModalContent w='100%'
                              maxW={{base: '288px', md: '350px', '2xl': '550px'}}
                              p={5}
                >
                    <ModalHeader mb='10px'>{title}</ModalHeader>
                    <ModalCloseButton/>
                    <ModalFooter display='grid' gridTemplateColumns='1fr 1fr' gridColumnGap='8px'>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={deleteBtnHandler}>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DeleteModal