import { Box, Text } from '@chakra-ui/react';

import { MESSAGES, useI18N } from '@/lib/i18n';

export const Main = () => {
  const [title, text] = useI18N(MESSAGES.WELCOME_TITLE, MESSAGES.WELCOME_TEXT);

  return (
    <Box display='flex' alignItems='center' justifyContent='center' flexGrow={1}>
      <Box maxW='500px' textAlign='center' p={5}>
        <Text as='h1' fontSize={['30px', '38px', '46px']}>
          {title}
        </Text>
        <Text as='h2' fontSize={['15px', '20px']} mt='10px'>
          {text}
        </Text>
      </Box>
    </Box>
  );
};
