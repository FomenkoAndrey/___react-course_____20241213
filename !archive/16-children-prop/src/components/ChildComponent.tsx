import { ComponentProps } from '../types/ComponentProps.ts'

const ChildComponent = ({ children, color }: ComponentProps) => {
  const componentStyle = {
    backgroundColor: color || 'yellow',
    color: 'white',
    padding: '20px'
  }

  return (
    <div style={componentStyle}>{children}</div>
  )
}

export default ChildComponent
