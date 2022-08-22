import {FC, useState} from 'react';
import {Box} from "@chakra-ui/react";
import SearchInput from "../../components/Common/SearchInput";
import {useContacts} from "../../features/hooks/useContacts";
import CreateContactModal from "../../components/Contacts/Modals/CreateContactModal";
import ContactsTable from "../../components/Contacts/ContactsTable";

const Contacts: FC = () => {

    const [search, setSearch] = useState<string>("");
    const {data: contactsList=[]} = useContacts({search});

    return (
        <Box height='100%'
             padding='20px'
             overflow='auto'
             position='relative'
             paddingBottom='80px'
        >
            <Box display='flex' gridGap={5} mb={5}>
                <SearchInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Введите имя и фамилию'
                />
                <CreateContactModal/>
            </Box>

            {contactsList && contactsList.length > 0 &&
            <ContactsTable dataArray={contactsList}/>
            }
        </Box>
    )
}

export default Contacts