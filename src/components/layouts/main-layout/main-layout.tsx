import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Header } from './header';

export const MainLayout = () => {
  return (
    <Box minH='100vh' display='flex' flexDirection='column'>
      <Header />
      <Outlet />
    </Box>
  );
};
