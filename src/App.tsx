import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Link, Routes, Route } from 'react-router-dom';
import { useTheme } from './theme/useTheme';
import { HomePageAsync } from './pages/HomePage/HomePageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { NotFoundPageAsync } from './pages/NotFoundPage/NotFoundPageAsync';
import './styles/index.scss';

const Root = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
          <Route path="/" element={<HomePageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="*" element={<NotFoundPageAsync />} />
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
