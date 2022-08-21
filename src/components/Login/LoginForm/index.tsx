import {FC} from "react";
import {FormikProvider, useFormik} from "formik";
import FormikInput from "../../Common/FormikComponents/FormikInput";
import FormikPasswordInput from "../../Common/FormikComponents/FormikPasswordInput";
import {Box, Button, useToast} from "@chakra-ui/react";
import useLogin from "../../../features/hooks/useLogin";
import {IUser} from "../../../types";
import {useDispatch} from "react-redux";
import {login} from "../../../store/slices/appSlice";
import {loginAndRegistrationFormValidation} from "../../../features/validation/LoginAndRegistrationFormValidation";

const LoginForm: FC = () => {

    const {mutate: loginUser} = useLogin();
    const dispatch = useDispatch();
    const initialValues: IUser = {username: '', password: ''};
    const toast = useToast();
    const formik = useFormik({
        initialValues,
        validationSchema:loginAndRegistrationFormValidation,
        onSubmit: submitHandler
    })

    function submitHandler(values: IUser) {
        loginUser(values,{
            onSuccess:({token})=>dispatch(login(token)),
            onError:()=>toast({
                title: 'Ошибка при входе в аккаунт',
                status: 'error',
                duration: 5000,
            })
        })
    }

    const submitForm = formik.submitForm;

    return (
        <Box display='flex' flexDir='column' alignItems='center' gridGap='20px'>
            <FormikProvider value={formik}>
                <FormikInput name={'username'} id={'username'} label={"Имя пользователя"}/>
                <FormikPasswordInput name={'password'} id={'password'} label={"Пароль"}/>
                <Button w={['70%','40%']} mt='30px' onClick={submitForm}>Войти</Button>
            </FormikProvider>
        </Box>
    )
}

export default LoginForm