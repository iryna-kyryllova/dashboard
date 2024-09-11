import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useTheme } from 'app/providers/Theme'
import { RouterErrorBoundary } from 'app/providers/ErrorBoundary'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from 'app/router'
import { classNames } from 'shared/lib/helpers/classNames'
import 'app/styles/index.scss'

const Root = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', [theme])}>
      <Header />
      <div className='page'>
        <Sidebar />
        <main>
          <AppRouter />
        </main>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  { path: '*', element: <Root />, ErrorBoundary: RouterErrorBoundary }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
