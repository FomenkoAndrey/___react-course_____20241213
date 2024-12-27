import { useRouteError } from 'react-router'

const ErrorBoundary = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>Виникла помилка</h1>
      <p>{(error as Error)?.message || 'Щось пішло не так'}</p>
      <p>Спробуйте перезавантажити сторінку</p>
    </div>
  )
}

export default ErrorBoundary
