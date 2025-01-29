import { initialValues } from '../config/initialValues.ts'
import { validationSchema } from '../config/validationScheme.ts'
import { handleSubmit } from '../helpers/handleSubmit.ts'
import { FormikConfig } from 'formik'
import { RegistrationFormValuesInterface } from '../types/RegistrationFormValues.interface.ts'

export const useRegistrationForm = (): FormikConfig<RegistrationFormValuesInterface> => {
  return {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    validateOnMount: true
  }
}
