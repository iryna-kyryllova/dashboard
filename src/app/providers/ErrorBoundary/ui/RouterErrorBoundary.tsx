import { useRouteError } from 'react-router-dom'
import { ErrorPage } from 'widgets/ErrorPage'

export const RouterErrorBoundary = () => {
  const error = useRouteError() as Error

  return <ErrorPage errorMessage={error.message} />
}
