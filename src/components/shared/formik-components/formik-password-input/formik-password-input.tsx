import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { FormikInput } from '../formik-input';
import { PasswordInputProps } from './types';

export const FormikPasswordInput: FC<PasswordInputProps> = ({ name, ...rest }) => {
  const [show, setShow] = useState<boolean>(false);

  const rightElement = (
    <IconButton
      colorScheme='teal'
      aria-label='view pass button'
      size='sm'
      borderRadius='6px'
      onClick={() => setShow((prev) => !prev)}
      icon={show ? <ViewIcon /> : <ViewOffIcon />}
      outline='none'
    />
  );

  return (
    <FormikInput
      name={name}
      type={show ? 'text' : 'password'}
      rightElement={rightElement}
      {...rest}
    />
  );
};
