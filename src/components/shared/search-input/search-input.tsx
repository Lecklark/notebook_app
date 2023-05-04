import { Icon, SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC } from 'react';

import { SearchInputProps } from './types';

export const SearchInput: FC<SearchInputProps> = ({ ...rest }) => {
  return (
    <InputGroup>
      <Input {...rest} />
      <InputRightElement>
        <Icon as={SearchIcon} color='custom.gray.200' />
      </InputRightElement>
    </InputGroup>
  );
};
