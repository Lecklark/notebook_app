import {FC} from "react";
import {Box, Switch, useColorMode} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeSwitcher:FC = ()=>{

    const { toggleColorMode } = useColorMode();

    return(
            <Box display='flex' gridGap='10px' alignItems='center'>
                <SunIcon />
                <Switch size='lg' onChange={toggleColorMode}/>
                <MoonIcon />
            </Box>
    )
}

export default ThemeSwitcher