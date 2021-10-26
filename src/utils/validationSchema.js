import * as yup from 'yup';

export const TODO_SCHEMA = yup.object({
    taskValue: yup.string().matches(/^[^\s]{1,}$/, "Неправильный ввод").required("Поле обязательно для заполнения")
});