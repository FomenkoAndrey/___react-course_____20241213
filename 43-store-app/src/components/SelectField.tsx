import { ChangeEvent } from 'react'

interface SelectFieldProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  required?: boolean
}

const SelectField = ({ id, value, onChange, options, required = true }: SelectFieldProps) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      <select className="form-control" id={id} value={value} onChange={onChange} required={required}>
        <option value="">Please select a {id}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
