import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

const LoginForm = () => {
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

  const handleSubmit = (values: { login: string, password: string }) => {
    console.log('Form submitted successfully:', values)
  }

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={validationScheme}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <Field type="text" id="login" name="login" />
          <ErrorMessage name="login" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default LoginForm
