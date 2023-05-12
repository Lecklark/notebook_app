import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Text } from '@chakra-ui/react';
import { OpenModalButton } from '@components/shared/open-modal-button';
import { SearchInput } from '@components/shared/search-input';
import { ContactsTable } from '@components/widgets/tables/contacts-table';
import { ChangeEvent, useState } from 'react';

import { useContacts } from '@/api/contacts-service';
import { MESSAGES, useI18N } from '@/lib/i18n';
import { debounce } from '@/lib/utils';
import { MODALS } from '@/types';

export const Notebook = () => {
  const [search, setSearch] = useState<string>('');
  const [placeholder, btnText] = useI18N(
    MESSAGES.SEARCH_PLACEHOLDER,
    MESSAGES.NEW_CONTACT,
  );

  const searchChangeHandler = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 200);

  const { data: contacts = [] } = useContacts();

  return (
    <Box
      height='100%'
      padding='20px'
      overflow='auto'
      position='relative'
      paddingBottom='80px'
    >
      <Box display='flex' gridGap={5} mb={5}>
        <SearchInput onChange={searchChangeHandler} placeholder={placeholder} />
        <OpenModalButton modal={MODALS.CREATE_CONTACT_MODAL}>
          <Button display={{ base: 'none', md: 'block' }}>{btnText}</Button>
          <Button display={{ base: 'block', md: 'none' }}>
            <AddIcon />
          </Button>
        </OpenModalButton>
      </Box>
      {contacts && contacts.length > 0 ? <ContactsTable contacts={contacts} /> : null}
    </Box>
  );
};
