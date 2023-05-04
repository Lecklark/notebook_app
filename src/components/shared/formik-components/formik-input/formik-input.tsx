import { CheckIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useField } from 'formik';
import { FC } from 'react';

import { FormikInputProps } from './types';

export const FormikInput: FC<FormikInputProps> = ({
  name,
  label,
  rightElement,
  ...rest
}) => {
  const [field, meta, { setValue, setTouched }] = useField(name);

  const rightIcon = rightElement ? rightElement : <CheckIcon color='green.500' />;

  return (
    <FormControl isInvalid={!!meta.error && meta.touched} position='relative'>
      {label && (
        <FormLabel fontWeight={600} fontSize='md' textTransform='capitalize'>
          {label}
        </FormLabel>
      )}

      <InputGroup>
        <Input
          {...field}
          {...rest}
          borderWidth={1}
          borderRadius={'10px'}
          fontSize='md'
          lineHeight={4}
          h={10}
          onBlur={(e) => {
            setValue(e.target.value.trim());
            setTouched(true);
          }}
        />
        <InputRightElement opacity={!meta.error && meta.touched ? '1' : '0'}>
          {rightIcon}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage
        position='absolute'
        right='0'
        top='70px'
        justifyContent='flex-end'
      >
        <Text noOfLines={2} textAlign='right'>
          {meta.error}
        </Text>
      </FormErrorMessage>
    </FormControl>
  );
};
