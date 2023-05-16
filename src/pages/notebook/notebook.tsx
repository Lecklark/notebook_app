import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Spinner } from '@chakra-ui/react';
import { OpenModalButton } from '@components/shared/open-modal-button';
import { SearchInput } from '@components/shared/search-input';
import { ContactsTable } from '@components/widgets/tables';
import { ChangeEvent, useMemo, useState } from 'react';

import { useContacts } from '@/api/contacts-service';
import { MESSAGES, useI18N } from '@/lib/i18n';
import { debounce } from '@/lib/utils';
import { MODALS } from '@/types';

export const Notebook = () => {
  const [search, setSearch] = useState<string>('');
  const [placeholder, btnText, emptyMessage, errorMessage] = useI18N(
    MESSAGES.SEARCH_PLACEHOLDER,
    MESSAGES.NEW_CONTACT,
    MESSAGES.EMPTY_CONTACTS_TABLE,
    MESSAGES.DATA_LOADING_ERROR,
  );

  const searchChangeHandler = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 200);
  const contactFilter = search ? { search } : {};

  const { data: contacts = [], isLoading, isError } = useContacts(contactFilter);

  const sortedContacts = useMemo(() => {
    return [...contacts].sort(function (a, b) {
      return +new Date(b.createdAt) - +new Date(a.createdAt);
    });
  }, [contacts]);

  const showEmptyMessage = !isLoading && !isError && sortedContacts.length === 0;

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
          <Button display={{ base: 'none', md: 'block' }} flexShrink={0}>
            {btnText}
          </Button>
        </OpenModalButton>
        <OpenModalButton modal={MODALS.CREATE_CONTACT_MODAL}>
          <Button display={{ base: 'block', md: 'none' }} flexShrink={0}>
            <AddIcon />
          </Button>
        </OpenModalButton>
      </Box>
      {sortedContacts && !!sortedContacts.length && (
        <ContactsTable contacts={sortedContacts} />
      )}
      <Box w='fit-content' m='30px auto' fontSize='22px'>
        {isLoading && <Spinner size='xl' />}
        {isError && errorMessage}
        {showEmptyMessage && emptyMessage}
      </Box>
    </Box>
  );
};
