import {FC} from "react";
import {
    Box,
    Button,
    Divider,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure, useMediaQuery
} from "@chakra-ui/react";
import {IContact} from "../../../../types";
import {FormikProvider, useFormik} from "formik";
import {AddIcon, CloseIcon} from "@chakra-ui/icons";
import FormikInput from "../../../Common/FormikComponents/FormikInput";
import {useCreateContact} from "../../../../features/hooks/useContacts";
import {useQueryClient} from "@tanstack/react-query";
import {CreateAndEditContactForm} from "../../../../features/validation/CreateAndEditContactForm";

const CreateContactModal:FC = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)');
    const {mutate:createNewContact} = useCreateContact();
    const queryClient = useQueryClient();
    const initialValues:IContact={
        fullname:'',
        email:'',
        phone:'',
        address:'',
    }

    const formik=useFormik({
        initialValues,
        validationSchema:CreateAndEditContactForm,
        onSubmit: onSubmitHandler,
    })

    const handleSubmit = formik.submitForm;

    function onSubmitHandler(values:IContact) {
        createNewContact(values,{
            onSuccess:()=>{
                queryClient.invalidateQueries(['contacts']);
                onClose();
            }
        })
    }

    return (
        <>
            <Button onClick={onOpen}
                    rightIcon={isLargerThan1400 ? <AddIcon /> : undefined}
            >
                {isLargerThan1400 ? "Новый контакт" : <AddIcon /> }
            </Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay/>
                <ModalContent  w='100%' maxW={{base: '288px', md: '720px', '2xl': '885px'}}>
                    <FormikProvider value={formik}>
                        <ModalHeader mb='10px' display='flex' fontSize={{base: '18px', '2xl': '24px'}}>
                            Создать новый контакт
                            <Box ml='auto' display='flex' fontSize={{base: '12px', '2xl': '14px'}} gridGap={4}>
                                <Button w='100%' variant='solid' fontSize='inherit' onClick={onClose}>
                                    <CloseIcon />
                                </Button>
                            </Box>
                        </ModalHeader>
                        <Divider />
                        <ModalBody pb={5} pt={{base:2,md:10}}>
                            <Box display='grid'
                                 gridTemplateColumns={{base:'1fr',md:'1fr 1fr'}}
                                 gridColumnGap='20px'
                                 gridRowGap='10px'
                            >
                                <FormikInput name='fullname' label='ФИО' id='fullname' />
                                <FormikInput name='phone' label='Номер телефона' id='phone'  />
                                <FormikInput name='email' label='E-mail' id='email'  />
                                <FormikInput name='address' label='Адрес' id='address' />
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

export default CreateContactModal