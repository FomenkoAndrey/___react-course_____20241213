interface ErrorFallbackProps {
  error: Error
}

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div role="alert" style={{ color: 'red', padding: '20px', border: '1px solid red' }}>
      <h2>⚠️Something went wrong</h2>
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback
