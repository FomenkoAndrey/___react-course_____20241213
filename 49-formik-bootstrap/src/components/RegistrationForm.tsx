import { Form, Formik } from 'formik'
import { Button } from 'react-bootstrap'
import { validationSchema } from '../config/validationScheme.ts'
import { handleSubmit } from '../helpers/handleSubmit.ts'
import { initialValues } from '../config/initialValues.ts'
import InputField from './InputField.tsx'

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <InputField name="username"
                      type="text"
                      placeholder="Введіть логін"
                      label="Логін"
                      touched={touched}
                      errors={errors} />

          <InputField name="password"
                      type="password"
                      placeholder="Введіть пароль"
                      label="Пароль"
                      touched={touched}
                      errors={errors} />

          <InputField name="confirmPassword"
                      type="password"
                      placeholder="Підтвердіть пароль"
                      label="Підтвердження пароля"
                      touched={touched}
                      errors={errors} />


          <InputField name="email"
                      type="email"
                      placeholder="Введіть email"
                      label="Email"
                      touched={touched}
                      errors={errors} />

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Зареєструватись
          </Button>
        </Form>

      )}
    </Formik>
  )
}

export default RegistrationForm
