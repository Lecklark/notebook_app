import {FC} from "react";
import {Box, Button, Image} from "@chakra-ui/react";
import ThemeSwitcher from "../../Common/ThemeSwitcher";
import {useNavigate} from "react-router-dom";
import {LOGIN_PAGE} from "../../../constants";
import {useAppSelector} from "../../../features/hooks/useAppSelector";
import {isAuthInState, logout} from "../../../store/slices/appSlice";
import {useAppDispatch} from "../../../features/hooks/useAppDispatch";

const logo = require('../../../assets/images/site_logo.png');

const Header: FC = () => {

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

    return (
        <Box as='header'
             display='flex'
             zIndex={100}
             w='100%'
             justifyContent={['end', 'space-between']}
             alignItems='center'
             height={['80px', '100px']}
             boxShadow='base'
             p={['0 15px', '0 30px']}
        >
            <Image src={logo}
                   borderRadius='20px'
                   alt='logo'
                   display={['none', 'block']}
            />
            <Box display='flex' gridGap={['20px', '50px']}>
                <ThemeSwitcher/>
                <Button onClick={buttonClickHandler}>
                    {isAuth ? "Выйти" : "Войти"}
                </Button>
            </Box>

        </Box>
    )
}

export default Header