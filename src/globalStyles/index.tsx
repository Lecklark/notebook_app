import {createBreakpoints} from '@chakra-ui/theme-tools';
import {extendTheme} from '@chakra-ui/react';

const breakpoints = createBreakpoints({
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1440px',
});

export const theme = extendTheme({
    breakpoints,
})