import { ReactNode } from 'react'
import { useStyles } from '../hooks/useStyles.ts'

type ButtonProps = {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  const classes = useStyles()

  return (
    <button className={classes.button}>{children}</button>
  )
}

export default Button
