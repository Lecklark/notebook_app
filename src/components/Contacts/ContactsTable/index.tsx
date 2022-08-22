import {FC, useMemo} from "react";
import {CONTACTS_TABLE_HEADERS} from "../../../constants";
import TableCreator from "../../Common/TableCreator";
import {Column, Row} from "react-table";
import DeleteContactModal from "../Modals/DeleteContactModal";
import {contactsResponse} from "../../../api/contacts";

interface ContactsTableProps{
    dataArray:contactsResponse[];
}

const ContactsTable:FC<ContactsTableProps> = ({dataArray}) => {

    const tableData = useMemo(()=>dataArray,[dataArray]);
    const tableColumns = useMemo(()=>{
        return CONTACTS_TABLE_HEADERS.map(field=>{
            const fieldObject:Column={
                Header:field.Header,
                accessor:field.accessor,
            };

            if(field.accessor==='funcColumn') {
                fieldObject['Cell']=({row}:{row:Row})=>{
                    const index = row.index;
                    const name = dataArray[index].fullname;
                    const id = dataArray[index].id;
                    return <DeleteContactModal name={name} id={id} />
                }
            }

            return fieldObject
        })
    },[dataArray]);

    return(
        <>
            <TableCreator data={tableData} columns={tableColumns}/>
        </>
    )
}

export default ContactsTable

