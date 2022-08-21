import {FC, useEffect} from 'react';
import {Box,Text} from "@chakra-ui/react";
import {useAppSelector} from "../../features/hooks/useAppSelector";
import {isAuthInState} from "../../store/slices/appSlice";
import {useNavigate} from "react-router-dom";
import {CONTACTS_PAGE} from "../../constants";

const Main:FC = () => {

    const isAuth = useAppSelector(isAuthInState);
    const navigate = useNavigate();
    useEffect(()=>{
        if (isAuth) navigate(CONTACTS_PAGE)
    },[isAuth])

    return(
        <Box display='flex' alignItems='center' justifyContent='center' flexGrow={1}>
            <Box  maxW='500px' textAlign='center' p={5}>
                <Text as='h1' fontSize={['30px','38px','46px']}>
                    Добро пожаловать в "Записную книжку"
                </Text>
                <Text as='h2' fontSize={['15px','20px']} mt='10px'>Чтобы сделать записи, зарегистрируйтесь или войдите в аккаунт</Text>
            </Box>
        </Box>
    )
}

export default Main