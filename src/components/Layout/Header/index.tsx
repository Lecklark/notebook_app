import { FC} from "react";
import {Box, Button, Text, } from "@chakra-ui/react";
import ThemeSwitcher from "../../Common/ThemeSwitcher";
import {useNavigate} from "react-router-dom";
import {LOGIN_PAGE} from "../../../constants";
import {useAppSelector} from "../../../features/hooks/useAppSelector";
import {isAuthInState, logout} from "../../../store/slices/appSlice";
import {useAppDispatch} from "../../../features/hooks/useAppDispatch";

const Header:FC = ()=>{

    const isAuth = useAppSelector(isAuthInState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const buttonClickHandler = () => {
        if (isAuth) {
            dispatch(logout());
        } else {
            navigate(LOGIN_PAGE)
        }
    }

    return(
        <Box as='header'
             display='flex'
             zIndex={100}
             w='100%'
             justifyContent='space-between'
             alignItems='center'
             height={['80px','100px']}
             boxShadow='base'
             p={['0 15px','0 30px']}
        >
            <Text>Logo</Text>
            <Box display='flex' gridGap={['25px','50px']}>
                <ThemeSwitcher />
                <Button onClick={buttonClickHandler}>
                    {isAuth ? "Выйти" : "Войти"}
                </Button>
            </Box>

        </Box>
    )
}

export default Header