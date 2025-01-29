import { FormikFieldStateInterface } from '../types/FormikFieldStateInterface.ts'

export const getFormControlClass = (
    touched: FormikFieldStateInterface,
    error: FormikFieldStateInterface,
    name: string
) => {
  if (touched[name] && error[name]) return 'is-invalid'
  if (touched[name] && !error[name]) return 'is-valid'
  return ''
}
