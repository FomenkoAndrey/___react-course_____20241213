import { FormikHelpers } from 'formik'
import { RegistrationFormValuesInterface } from '../types/RegistrationFormValues.interface.ts'
import { toast } from 'react-toastify'

export const handleSubmit = (
    values: RegistrationFormValuesInterface,
    {setSubmitting}: FormikHelpers<RegistrationFormValuesInterface>
) => {
  setTimeout(() => {
    toast.success('Form submitted successfully')
    console.log('Form submitted successfully', values)
    setSubmitting(false)
  }, 2000)
}
