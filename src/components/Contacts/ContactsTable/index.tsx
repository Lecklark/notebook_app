import {FC, useMemo} from "react";
import {IContact} from "../../../types";
import {CONTACTS_TABLE_HEADERS} from "../../../constants";
import TableCreator from "../../Common/TableCreator";

interface ContactsTableProps{
    dataArray:IContact[];
}

const ContactsTable:FC<ContactsTableProps> = ({dataArray}) => {

    const tableData = useMemo(()=>dataArray,[dataArray]);
    const tableColumns = useMemo(()=>{
        return CONTACTS_TABLE_HEADERS.map(field=>{
            const fieldObject={
                Header:field.Header,
                accessor:field.accessor,
            };

            return fieldObject
        })
    },[tableData]);

    return(
        <>
            <TableCreator data={tableData} columns={tableColumns}/>
        </>
    )
}

export default ContactsTable

