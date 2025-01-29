import { ErrorMessage, Field, FieldProps } from 'formik'
import SuccessMessage from './SuccessMessage.tsx'
import { ChangeEvent, FC, memo } from 'react'
import { Form } from 'react-bootstrap'
import { handleFieldChange } from '../helpers/handleFieldChange.ts'
import { getFormControlClass } from '../helpers/getFormControlClass.ts'
import { FormikFieldStateInterface } from '../types/FormikFieldStateInterface.ts'

interface InputFieldProps {
  name: string
  type: string
  placeholder: string
  label: string
  touched: FormikFieldStateInterface
  errors: FormikFieldStateInterface
  disabled?: boolean
  readOnly?: boolean
}

const InputField: FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  label,
  touched,
  errors,
  disabled,
  readOnly
}) => {
  const autoComplete = type === 'password'
    ? 'new-password'
    : type === 'email'
      ? 'email' : 'off'
  const formControlClass = getFormControlClass(touched, errors, name)

  return (
    <Form.Group className="mb-4">

      <Form.Label htmlFor={name}>{label}</Form.Label>

      <Field name={name}>
        {({ field, form }: FieldProps) => {
          return (
            <Form.Control
              {...field}
              id={name}
              type={type}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(e, form, field, name)}
              placeholder={placeholder}
              className={formControlClass}
              autoComplete={autoComplete}
              disabled={disabled}
              readOnly={readOnly}
              isInvalid={!!(touched[name] && errors[name])}
            />
          )
        }}
      </Field>

      {touched[name] && errors[name]
        ? <ErrorMessage name={name} component="div" className="invalid-feedback" />
        : <SuccessMessage name={name} touched={touched} errors={errors} />
      }

    </Form.Group>
  )
}

const MemoizedInputField = memo(InputField)

export { MemoizedInputField as InputField }
