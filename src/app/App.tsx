import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { useTheme } from 'app/context/theme';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/router';
import { classNames } from 'shared/lib/helpers/classNames';
import 'app/styles/index.scss';

const Root = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle Theme</button>
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
