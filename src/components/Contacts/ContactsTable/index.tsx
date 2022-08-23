import {FC, useMemo} from "react";
import {CONTACTS_TABLE_HEADERS} from "../../../constants";
import TableCreator from "../../Common/TableCreator";
import {Column, Row} from "react-table";
import DeleteContactModal from "../Modals/DeleteContactModal";
import {contactsResponse} from "../../../api/contacts";
import UpdateContactModal from "../Modals/UpdateContactModal";
import {Box, Text, useColorModeValue} from "@chakra-ui/react";

interface ContactsTableProps {
    dataArray: contactsResponse[];
}

const ContactsTable: FC<ContactsTableProps> = ({dataArray}) => {

    const tableData = useMemo(() => dataArray, [dataArray]);
    const tableColumns = useMemo(() => {
        return CONTACTS_TABLE_HEADERS.map(field => {
            const fieldObject: Column = {
                Header: field.Header,
                accessor: field.accessor,
            };

            if (field.accessor === 'funcColumn') {
                fieldObject['Cell'] = ({row}: { row: Row }) => {
                    const index = row.index;
                    const name = dataArray[index].fullname;
                    const id = dataArray[index].id;
                    return (<>
                        <UpdateContactModal contact={dataArray[index]} id={id}/>
                        <DeleteContactModal name={name} id={id}/>
                    </>)
                }
                return fieldObject
            }

            fieldObject['Cell'] = ({value}) => {
                return <Text noOfLines={1}>{value}</Text>
            }

            return fieldObject
        })
    }, [dataArray]);

    const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')

    return (
        <Box
            overflow='auto'
            w='100%'
            border='1px'
            borderColor={borderColor}
            borderRadius='5px'
        >
            <Box minW='950px'>
                <TableCreator data={tableData} columns={tableColumns}/>
            </Box>
        </Box>

    )
}

export default ContactsTable

