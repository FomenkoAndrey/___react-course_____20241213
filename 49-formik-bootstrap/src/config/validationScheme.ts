import { object, ref, string } from 'yup'

export const validationSchema = object().shape({
  username: string()
    .required('Обов\'язкове поле'),
  password: string()
    .required('обов\'язкове поле'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Паролі не співпадають')
    .required('Підтвердіть пароль'),
  email: string()
    .email('Введіть коректний email')
    .required('Обов\'язкове поле')
})
