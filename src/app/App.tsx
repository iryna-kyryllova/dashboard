import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { useTheme } from 'app/context/theme';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/router';
import { classNames } from 'shared/lib/helpers/classNames';
import 'app/styles/index.scss';

const Root = () => {
  const { theme } = useTheme();

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
  );
}

const router = createBrowserRouter([
  { path: "*", element: <Root /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
