## Приложение доступно по адресу: https://notebook-app-jpyb.onrender.com

### Краткое описание:
Приложение, позволяющее авторизованному пользователю хранить данные контактов (фамилия, номер телефона, E-mail, адрес)

### Использованные технологии:
React, React-Router, Redux-Toolkit, React-Query, Chakra-UI, Formik, React-Intl, Redux-Persist, Reselect, Axios

### Реализован следующий функционал:
- JWT авторизация с использованием axios interceptors, хранением токенов в LocalStorage и глобальном стейте (Redux-Toolkit + Redux-Persist)
- Создание, удаление, редактирование, инвалидация контактов пользователя с помощью React-Query
- Поиск контактов по запросу из поисковой строки
- Интернационализация (доступны русская и английская версия приложения) с использованием React-Intl
- Работа с формами с помощью библиотеки Formik
- Стилизация, темизация (доступны светлая и темная темы) с помощью библиотеки Chakra UI

### Из интересного:
Для оптимизации приложения был использован плагин rollup-plugin-visualizer, позволяющий проанализировать бандл приложения. 
Также была проведена работа над оптимизацией ререндеров, добавлен Lazy Loading страниц и некоторых компонентов

### Дополнительно:
Для работы приложения был написан бэкенд с использованием NodeJS, Express. Репозиторий доступен по ссылке https://github.com/Lecklark/notebook_backend
