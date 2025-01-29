import { Form } from 'react-bootstrap'

interface FormikFieldState {
  [key: string]: boolean | string
}

interface SuccessMessageProps {
  name: string,
  touched: FormikFieldState,
  errors: FormikFieldState,
  successMessage?: string
}

const SuccessMessage = ({
  name,
  touched,
  errors,
  successMessage = 'Дані введено успішно'
}: SuccessMessageProps) => {
  if (!touched[name] || errors[name]) {
    return null
  }

  return <Form.Text as="div" className="valid-feedback">{successMessage}</Form.Text>
}

export default SuccessMessage
