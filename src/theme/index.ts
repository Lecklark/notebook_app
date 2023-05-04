import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1440px',
};

export const theme = extendTheme({
  breakpoints,
});
