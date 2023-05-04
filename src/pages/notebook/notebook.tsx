import { Box, Text } from '@chakra-ui/react';
import { SearchInput } from '@components/shared/search-input';
import { ChangeEvent, useState } from 'react';

import { MESSAGES, useI18N } from '@/lib/i18n';
import { debounce } from '@/lib/utils';

export const Notebook = () => {
  const [search, setSearch] = useState<string>('');
  const [placeholder] = useI18N(MESSAGES.SEARCH_PLACEHOLDER);

  const searchChangeHandler = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, 200);

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
      </Box>
    </Box>
  );
};
