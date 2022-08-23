import {FC} from 'react';
import {Link} from "react-router-dom";
import { LOGIN_PAGE} from "../../constants";
import {Box, Text} from "@chakra-ui/react";
import RegistrationForm from "../../components/Registration/RegistrationForm";
import {useAuthRedirect} from "../../features/hooks/useAuthRedirect";

const Registration: FC = () => {

    useAuthRedirect();

    return (
        <Box flexGrow={1} display='flex' alignItems='center' justifyContent='center'>
            <Box boxShadow='xl' p={10} minW={['90%', '550px']} borderRadius='20px'>
                <Text textAlign='center' fontSize='25px' fontWeight='600' mb='40px'>Регистрация</Text>
                <RegistrationForm/>
                <Link to={LOGIN_PAGE}>
                    <Text textAlign='center'
                          mt='30px'
                          _hover={{textDecoration: 'underline'}}
                          color='blue.500'
                    >
                        Войти в аккаунт
                    </Text>
                </Link>
            </Box>
        </Box>
    )
}

export default Registration