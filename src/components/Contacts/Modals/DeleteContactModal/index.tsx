import {FC} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {useDisclosure} from "@chakra-ui/react";
import DeleteModal from "../../../Common/DeleteModal";
import {useDeleteContact} from "../../../../features/hooks/useContacts";

interface DeleteContactModalProps{
    name:string,
    id:number,
}

const DeleteContactModal:FC<DeleteContactModalProps>= ({name,id})=> {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const {mutate: deleteAccounting} = useDeleteContact();
    const queryClient = useQueryClient();

    function deleteHandler() {
        deleteAccounting(id,{
            onSuccess:()=>{
                queryClient.invalidateQueries(['contacts']);
                onClose();
            }
        })
    }

    return (
        <DeleteModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            title={`Удалить работника ${name}?`}
            deleteBtnHandler={deleteHandler}
        />
    )
}

export default DeleteContactModal