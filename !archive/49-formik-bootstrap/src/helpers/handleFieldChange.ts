import { ChangeEvent } from 'react'
import { FieldProps } from 'formik'

export const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement>,
    form: FieldProps['form'],
    field: FieldProps['field'],
    name: string
) => {
  void form.setFieldTouched(name, true, false)
  field.onChange(e)
}
