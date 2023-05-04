import { Box, Text } from '@chakra-ui/react';
import { AuthForm } from '@components/widgets/auth-form';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FormWrapperProps } from './types';

export const FormWrapper: FC<FormWrapperProps> = ({
  title,
  linkHref,
  linkText,
  formComponent,
}) => {
  return (
    <Box boxShadow='xl' p={10} minW={['90%', '550px']} borderRadius='20px'>
      {title && (
        <Text textAlign='center' fontSize='25px' fontWeight='600' mb='40px'>
          {title}
        </Text>
      )}
      {formComponent}
      {linkHref && linkText && (
        <Link to={linkHref}>
          <Text
            textAlign='center'
            mt='30px'
            _hover={{ textDecoration: 'underline' }}
            color='blue.500'
          >
            {linkText}
          </Text>
        </Link>
      )}
    </Box>
  );
};
