import * as yup from 'yup';

const REQUIRED_FIELD_ERROR = "Обязательное поле";
const phoneRegExp = /^((\+7|7|8)+([0-9]){10})$/

export const CreateAndEditContactForm = yup.object().shape({
    fullname: yup.string().required(REQUIRED_FIELD_ERROR),
    email: yup.string().email('Введите корректный e-mail').required(REQUIRED_FIELD_ERROR),
    phone: yup.string().matches(phoneRegExp, 'Введите корректный номер телефона').required(REQUIRED_FIELD_ERROR),
    address: yup.string().required(REQUIRED_FIELD_ERROR)
});
