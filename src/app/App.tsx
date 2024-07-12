import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Link, Routes, Route } from 'react-router-dom';
import { useTheme } from 'app/context/theme';
import { classNames } from 'shared/lib/helpers/classNames';
import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import 'app/styles/index.scss';

const Root = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme], {})}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
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
