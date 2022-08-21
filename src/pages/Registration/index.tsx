import {FC, useEffect} from 'react';
import {useAppSelector} from "../../features/hooks/useAppSelector";
import {isAuthInState} from "../../store/slices/appSlice";
import {Link, useNavigate} from "react-router-dom";
import {CONTACTS_PAGE, LOGIN_PAGE} from "../../constants";
import {Box, Text} from "@chakra-ui/react";
import RegistrationForm from "../../components/Registration/RegistrationForm";

const Registration:FC = () => {

    const isAuth = useAppSelector(isAuthInState);
    const navigate = useNavigate();
    useEffect(()=>{
        if (isAuth) navigate(CONTACTS_PAGE)
    },[isAuth])

    return (
        <Box flexGrow={1} display='flex' alignItems='center' justifyContent='center'>
            <Box boxShadow='xl' p={10} minW={['90%','550px']} borderRadius='20px'>
                <Text textAlign='center' fontSize='25px' fontWeight='600' mb='40px'>Регистрация</Text>
                <RegistrationForm />
                <Link to={LOGIN_PAGE} >
                    <Text textAlign='center'
                          mt='30px'
                          _hover={{textDecoration:'underline'}}
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