import {FC} from "react";
import {FormikProvider, useFormik} from "formik";
import FormikInput from "../../Common/FormikComponents/FormikInput";
import FormikPasswordInput from "../../Common/FormikComponents/FormikPasswordInput";
import {Box, Button, useToast} from "@chakra-ui/react";
import {IUser} from "../../../types";
import useRegistration from "../../../features/hooks/useRegistration";
import {loginAndRegistrationFormValidation} from "../../../features/validation/LoginAndRegistrationFormValidation";

const RegistrationForm: FC = () => {

    const initialValues: IUser = {username: '', password: ''};
    const toast = useToast();
    const {mutate: regUser} = useRegistration();

    const formik = useFormik({
        initialValues,
        validationSchema: loginAndRegistrationFormValidation,
        onSubmit: submitHandler
    })
    const submitForm = formik.submitForm;

    function submitHandler(values: IUser) {
        regUser(values, {
            onError: () => toast({
                title: 'Ошибка при создании аккаунта',
                status: 'error',
                duration: 5000,
            }),
            onSuccess: ({message}) => toast({
                title: 'Аккаунт создан',
                description: `${message}`,
                status: 'success',
                duration: 5000,
            })
        })
    }

    return (
        <Box display='flex' flexDir='column' alignItems='center' gridGap='20px'>
            <FormikProvider value={formik}>
                <FormikInput name={'username'} id={'username'} label={"Имя пользователя"}/>
                <FormikPasswordInput name={'password'} id={'password'} label={"Пароль"}/>
                <Button w={['70%', '40%']} mt='30px' onClick={submitForm}>Регистрация</Button>
            </FormikProvider>
        </Box>
    )
}

export default RegistrationForm