import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { useTheme } from 'app/context/theme';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/router';
import { classNames } from 'shared/lib/helpers/classNames';
import 'app/styles/index.scss';

const Root = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <ThemeSwitcher />
      <Navbar />
      <AppRouter />
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
