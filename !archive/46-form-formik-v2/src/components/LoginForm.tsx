import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import FormField from './FormField.tsx'

const initialValues = { login: '', password: '' }

const validationScheme = object({
  login: string()
    .required('Login is required')
    .min(3, 'Login must be at least 3 characters')
    .max(15, 'Login must be at most 15 characters'),
  password: string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(20, 'Password must be at most 20 characters')
})

const LoginForm = () => {
  const handleSubmit = (values: { login: string, password: string }) => {
    console.log('Form submitted successfully:', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={handleSubmit}
    >
      {
        ({ errors, touched }) => (
          <Form>
            <FormField
              label="Login"
              name="login"
              type="text"
              autoComplete="username"
              touched={touched.login}
              error={errors.login}
              validationMessage="Login is valid!"
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              touched={touched.password}
              error={errors.password}
              validationMessage="Password is valid!"
            />

            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default LoginForm
