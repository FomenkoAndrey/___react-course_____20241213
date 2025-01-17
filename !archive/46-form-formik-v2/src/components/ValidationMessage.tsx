import { FC } from 'react'

interface ValidationMessageProps {
  message: string
  touched?: boolean
  error?: string
}

const ValidationMessage: FC<ValidationMessageProps> = ({ message, touched, error }) => {
  if (touched && !error) {
    return <div className="success">{message}</div>
  }
  return null
}

export default ValidationMessage
