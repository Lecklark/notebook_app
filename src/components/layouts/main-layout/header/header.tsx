import { Box, Button, Image } from '@chakra-ui/react';
import { ThemeSwitcher } from '@components/shared/theme-switcher';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/images/site_logo.png';
import { ROUTES } from '@/lib/constants';
import { MESSAGES, useI18N } from '@/lib/i18n';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { isAuthInState } from '@/store/selectors';
import { logout } from '@/store/slices/app-slice';

export const Header: FC = () => {
  const isAuth = useAppSelector(isAuthInState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginText, logoutText] = useI18N(MESSAGES.LOGIN_BTN, MESSAGES.LOGOUT_BTN);

  const btnText = isAuth ? logoutText : loginText;

  const buttonClickHandler = () => {
    if (isAuth) {
      dispatch(logout());
    } else {
      navigate(ROUTES.LOGIN_PAGE);
    }
  };

  return (
    <Box
      as='header'
      display='flex'
      zIndex={100}
      w='100%'
      justifyContent={['end', 'space-between']}
      alignItems='center'
      height={['80px', '100px']}
      boxShadow='base'
      p={['0 15px', '0 30px']}
    >
      <Image src={Logo} borderRadius='20px' alt='logo' display={['none', 'block']} />
      <Box display='flex' gridGap={['20px', '50px']}>
        <ThemeSwitcher />
        <Button onClick={buttonClickHandler}>{btnText}</Button>
      </Box>
    </Box>
  );
};
