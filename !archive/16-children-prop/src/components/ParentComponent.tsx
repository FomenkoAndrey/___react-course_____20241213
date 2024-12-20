import { ComponentProps } from '../types/ComponentProps.ts'

const ParentComponent = ({ children, color }: ComponentProps) => {
  const componentStyle = {
    backgroundColor: color || 'yellow',
    color: 'white',
    padding: '20px'
  }

  return (
    <div>
      <h1 style={componentStyle}>Parent Component</h1>
      {children}
    </div>
  )
}

export default ParentComponent
