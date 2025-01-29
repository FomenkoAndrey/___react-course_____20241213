import { Form, Formik } from 'formik'
import { Button, Spinner } from 'react-bootstrap'
import { InputField } from './InputField.tsx'
import { useRegistrationForm } from '../hooks/useRegistrationForm.ts'

const RegistrationForm = () => {
  const formikProps = useRegistrationForm()
  return (
      <>
        <Formik {...formikProps}>
          {({isSubmitting, errors, touched, isValid}) => (
              <Form>
                <InputField
                    name="username"
                    type="text"
                    placeholder="Введіть логін"
                    label="Логін"
                    touched={touched}
                    errors={errors}
                />

                <InputField
                    name="password"
                    type="password"
                    placeholder="Введіть пароль"
                    label="Пароль"
                    touched={touched}
                    errors={errors}
                />

                <InputField
                    name="confirmPassword"
                    type="password"
                    placeholder="Підтвердіть пароль"
                    label="Підтвердження пароля"
                    touched={touched}
                    errors={errors}
                />

                <InputField
                    name="email"
                    type="email"
                    placeholder="Введіть email"
                    label="Email"
                    touched={touched}
                    errors={errors}
                />

                <Button variant="primary" type="submit" disabled={!isValid || isSubmitting} className="min-width-170"
                        style={{minWidth: '170px'}}>
                  {isSubmitting
                      ? (
                          <>
                            <Spinner as="span" animation="grow" size="sm" role="status" className="me-3"/>
                            Loading...
                          </>
                      )
                      : (
                          'Зареєструватись'
                      )
                  }

                </Button>
              </Form>
          )}
        </Formik>
      </>
  )
}

export default RegistrationForm
