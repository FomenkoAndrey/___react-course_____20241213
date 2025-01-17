import { ChangeEvent, FC } from 'react'

type InputFieldProps = {
  id: string
  name: string
  label: string
  type: string
  value: string
  error?: string
  isTouched?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void
  autoComplete: string
  placeholder?: string
}

const InputField: FC<InputFieldProps> = (
  {
    id,
    name,
    label,
    type,
    value,
    error,
    isTouched,
    onChange,
    onBlur,
    autoComplete,
    placeholder
  }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      {isTouched && <div style={{ color: error ? 'red' : 'green' }}>{error || 'Valid!'}</div>}
    </div>
  )
}

export default InputField
