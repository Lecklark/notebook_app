import {FC, useEffect} from 'react';
import {Box, Text} from "@chakra-ui/react";
import LoginForm from "../../components/Login/LoginForm";
import {Link } from "react-router-dom";
import { REGISTRATION_PAGE} from "../../constants";
import {useAuthRedirect} from "../../features/hooks/useAuthRedirect";

const Login: FC = () => {

    useAuthRedirect();

    return (
        <Box flexGrow={1} display='flex' alignItems='center' justifyContent='center'>
            <Box boxShadow='xl' p={10} minW={['90%', '550px']} borderRadius='20px'>
                <Text textAlign='center' fontSize='25px' fontWeight='600' mb='40px'>Войти в акканут</Text>
                <LoginForm/>
                <Link to={REGISTRATION_PAGE}>
                    <Text textAlign='center'
                          mt='30px'
                          _hover={{textDecoration: 'underline'}}
                          color='blue.500'
                    >
                        Регистрация
                    </Text>
                </Link>
            </Box>
        </Box>
    )
}

export default Login