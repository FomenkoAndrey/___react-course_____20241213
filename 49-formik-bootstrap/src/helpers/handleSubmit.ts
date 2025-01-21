import { FormikHelpers } from 'formik'
import { RegistrationFormValuesInterface } from '../types/RegistrationFormValues.interface.ts'

export const handleSubmit = (values: RegistrationFormValuesInterface, { setSubmitting }: FormikHelpers<RegistrationFormValuesInterface>) => {
  setTimeout(() => {
    console.log(values)
    setSubmitting(false)
  }, 2000)
}
