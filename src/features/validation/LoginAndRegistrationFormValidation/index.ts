import * as yup from 'yup';

const PASSWORD_LENGTH_ERROR = "Длина пароля должна быть больше 4 и меньше 10 символов";
const REQUIRED_FIELD_ERROR = "Обязательное поле";

export const loginAndRegistrationFormValidation = yup.object().shape({
    username: yup.string().required(REQUIRED_FIELD_ERROR),
    password: yup.string().min(4, PASSWORD_LENGTH_ERROR).max(10, PASSWORD_LENGTH_ERROR).required(),
});
