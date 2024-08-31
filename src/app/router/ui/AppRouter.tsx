import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from 'shared/config/routes/routes'
import { Loader } from 'shared/ui/Loader/Loader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routes).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
