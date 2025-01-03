import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick: () => void
  title: string
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
