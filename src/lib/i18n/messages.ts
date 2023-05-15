import { LOCALES } from './locales';
import { MESSAGES, Messages } from './types';

export const messages: Messages = {
  [LOCALES.RUSSIAN]: {
    [MESSAGES.WELCOME_TITLE]: 'Добро пожаловать в "Записную книжку"',
    [MESSAGES.WELCOME_TEXT]:
      'Чтобы сделать записи, зарегистрируйтесь или войдите в аккаунт',
    [MESSAGES.LOGIN_BTN]: 'Войти',
    [MESSAGES.LOGOUT_BTN]: 'Выйти',
    [MESSAGES.LOGIN_FORM_TITLE]: 'Войти в аккаунт',
    [MESSAGES.LOGIN_FORM_BTN]: 'Войти',
    [MESSAGES.LOGIN_FORM_LINK]: 'Нет аккаунта?',
    [MESSAGES.REG_FORM_TITLE]: 'Регистрация',
    [MESSAGES.REG_FORM_LINK]: 'Уже есть аккаунт?',
    [MESSAGES.REG_FORM_BTN]: 'Создать аккаунт',
    [MESSAGES.EMAIL_INPUT_LABEL]: 'Ваш E-mail',
    [MESSAGES.PASSWORD_INPUT_LABEL]: 'Пароль',
    [MESSAGES.SEARCH_PLACEHOLDER]: 'Введите имя и фамилию',
    [MESSAGES.REG_ERROR]: 'Возникла ошибка при регистрации',
    [MESSAGES.LOGIN_ERROR]: 'Ошибка при входе в аккаунт',
    [MESSAGES.NEW_CONTACT]: 'Новый контакт',
    [MESSAGES.FULLNAME_INPUT_LABEL]: 'ФИО',
    [MESSAGES.PHONE_INPUT_LABEL]: 'Номер телефона',
    [MESSAGES.CONTACT_EMAIL_INPUT_LABEL]: 'E-mail',
    [MESSAGES.ADDRESS_INPUT_LABEL]: 'Адрес',
    [MESSAGES.CREATE_CONTACT_TITLE]: 'Создать новый контакт',
    [MESSAGES.SAVE_TEXT]: 'Сохранить',
    [MESSAGES.CANCEL_TEXT]: 'Отмена',
    [MESSAGES.REQUIRED_FIELD]: 'Обязательное поле',
    [MESSAGES.INVALID_FORMAT]: 'Неверный формат',
    [MESSAGES.DELETE_MODAL_TITLE]: 'Удалить контакт {fullName}?',
    [MESSAGES.DELETE_TEXT]: 'Удалить',
    [MESSAGES.UPDATE_MODAL_TITLE]: 'Редактировать контакт {fullName}?',
    [MESSAGES.UPDATE_TEXT]: 'Обновить',
  },
};
