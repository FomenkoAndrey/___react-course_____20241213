import { object, ref, string } from 'yup'

export const validationSchema = object().shape({
  username: string()
      .min(3, 'Логін повинен містити від 3 до 12 символів')
      .max(12, 'Логін повинен містити від 3 до 12 символів')
      .required('Обов\'язкове поле'),
  password: string()
      .min(3, 'Пароль повинен містити від 3 до 20 символів')
      .max(20, 'Пароль повинен містити до 3 до 20 символів')
      .required('обов\'язкове поле'),
  confirmPassword: string()
      .oneOf([ref('password')], 'Паролі не співпадають')
      .required('Підтвердіть пароль'),
  email: string()
      .email('Введіть коректний email')
      .required('Обов\'язкове поле')
})
