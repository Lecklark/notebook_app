import {FC} from "react";
import {
    Box,
    Button,
    Divider,
    IconButton,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import {BASE_CONTACT_QUERY_KEY, useUpdateContact} from "../../../../features/hooks/useContacts";
import {useQueryClient} from "@tanstack/react-query";
import {IContact} from "../../../../types";
import {FormikProvider, useFormik} from "formik";
import {CreateAndEditContactForm} from "../../../../features/validation/CreateAndEditContactForm";
import {CloseIcon, EditIcon} from "@chakra-ui/icons";
import FormikInput from "../../../Common/FormikComponents/FormikInput";

interface UpdateContactModalProps {
    contact: IContact,
    id: number
}

const UpdateContactModal: FC<UpdateContactModalProps> = ({contact, id}) => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const {mutate: updateContact} = useUpdateContact();
    const queryClient = useQueryClient();
    const initialValues = contact;

    const formik = useFormik({
        initialValues,
        validationSchema: CreateAndEditContactForm,
        onSubmit: onSubmitHandler,
    })

    const handleSubmit = formik.submitForm;

    function onSubmitHandler(values: IContact) {
        updateContact({
            contact: values,
            id: id,
        }, {
            onSuccess: () => {
                queryClient.invalidateQueries([BASE_CONTACT_QUERY_KEY]);
                onClose();
            }
        })
    }

    return (
        <>
            <IconButton
                aria-label='update-contact'
                variant='unstyled'
                icon={<EditIcon/>}
                onClick={onOpen}
            />

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent w='100%' maxW={{base: '288px', md: '720px', '2xl': '885px'}}>
                    <FormikProvider value={formik}>
                        <ModalHeader mb='10px' display='flex' fontSize={{base: '18px', '2xl': '24px'}}>
                            Обновить контакт
                            <Box ml='auto' display='flex' fontSize={{base: '12px', '2xl': '14px'}} gridGap={4}>
                                <Button w='100%' variant='solid' fontSize='inherit' onClick={onClose}>
                                    <CloseIcon/>
                                </Button>
                            </Box>
                        </ModalHeader>
                        <Divider/>
                        <ModalBody pb={5} pt={{base: 2, md: 10}}>
                            <Box display='grid'
                                 gridTemplateColumns={{base: '1fr', md: '1fr 1fr'}}
                                 gridColumnGap='20px'
                                 gridRowGap='10px'
                            >
                                <FormikInput name='fullname' label='ФИО' id='fullname'/>
                                <FormikInput name='phone' label='Номер телефона' id='phone'/>
                                <FormikInput name='email' label='E-mail' id='email'/>
                                <FormikInput name='address' label='Адрес' id='address'/>
                            </Box>
                        </ModalBody>
                        <ModalFooter pb={10}>
                            <Button w='80%' variant='solid' fontSize='inherit' onClick={handleSubmit} mx='auto'>
                                Save
                            </Button>
                        </ModalFooter>
                    </FormikProvider>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpdateContactModal