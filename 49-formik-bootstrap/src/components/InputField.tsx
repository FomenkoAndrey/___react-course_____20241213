import { ErrorMessage, Field, FieldProps } from 'formik'
import SuccessMessage from './SuccessMessage.tsx'
import { FC } from 'react'

interface FormikFieldState {
  [kye: string]: boolean | string
}

interface InputFieldProps {
  name: string
  type: string
  placeholder: string
  label: string
  touched: FormikFieldState
  errors: FormikFieldState
}

const InputField: FC<InputFieldProps> = ({ name, type, placeholder, label, touched, errors }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <div>
            <input
              type={type}
              {...field}
              className={`form-control ${
                touched[name] && errors[name]
                  ? 'is-invalid'
                  : touched[name] && !errors[name]
                    ? 'is-valid'
                    : ''
              }`}
              placeholder={placeholder}
            />
            {touched[name] && errors[name]
              ? <ErrorMessage name={name} component="div" className="invalid-feedback" />
              : <SuccessMessage name={name} />
            }
          </div>
        )}
      </Field>
    </div>
  )
}

export default InputField
