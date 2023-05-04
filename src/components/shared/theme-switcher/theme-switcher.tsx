import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Switch, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const ThemeSwitcher: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const value = colorMode === 'dark';

  return (
    <Box display='flex' gridGap='10px' alignItems='center'>
      <SunIcon />
      <Switch size='lg' isChecked={value} onChange={toggleColorMode} />
      <MoonIcon />
    </Box>
  );
};
