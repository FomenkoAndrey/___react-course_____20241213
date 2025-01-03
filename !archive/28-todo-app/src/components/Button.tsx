import { ButtonProps } from '../types/ButtonProps.ts'

const Button = ({ children, ...props }: Partial<ButtonProps>) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button
