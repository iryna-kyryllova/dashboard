import { useRouteError } from 'react-router-dom'

export const RouterErrorBoundary = () => {
  const error = useRouteError()

  return (
    <div>
      <h1>Ошибка из RouterErrorBoundary!</h1>
      <p>Что-то пошло не так: {(error as Error).message}</p>
    </div>
  )
}
