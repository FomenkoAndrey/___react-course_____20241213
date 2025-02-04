import { ChangeEvent } from 'react'

interface InputFieldProps {
  id: string
  type?: string
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  textarea?: boolean
}

const InputField = ({
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = true,
  textarea = false
}: InputFieldProps) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      {textarea ? (
        <textarea
          className="form-control"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          className="form-control"
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

export default InputField
