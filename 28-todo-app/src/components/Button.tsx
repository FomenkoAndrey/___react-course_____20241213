import { ButtonProps } from '../types/ButtonProps.ts'

const Button = ({ children, onClick, title, disabled, type }: ButtonProps) => {
  return (
    <button onClick={onClick} title={title} disabled={disabled} type={type}>
      {children}
    </button>
  )
}

export default Button
