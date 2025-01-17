import { FC } from 'react'
import { ErrorMessage, Field } from 'formik'
import ValidationMessage from './ValidationMessage.tsx'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  autoComplete?: string
  touched?: boolean
  error?: string
  validationMessage?: string
}

const FormField: FC<FormFieldProps> = (
  {
    label,
    name,
    type = 'text',
    autoComplete = 'off',
    touched,
    error,
    validationMessage
  }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <Field type={type} id={name} name={name} autoComplete={autoComplete} />
      <ErrorMessage name={name} component="div" className="error" />
      {validationMessage &&
        <ValidationMessage
          message={validationMessage}
          touched={touched}
          error={error}
        />
      }
    </div>
  )
}

export default FormField
