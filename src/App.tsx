import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Link, Routes, Route } from 'react-router-dom';
import { HomePageAsync } from './pages/HomePage/HomePageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { NotFoundPageAsync } from './pages/NotFoundPage/NotFoundPageAsync';
import './index.scss';

const Root = () => {
  return (
    <>
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
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<HomePageAsync />} />
        <Route path="/about" element={<AboutPageAsync />} />
        <Route path="*" element={<NotFoundPageAsync />} />
      </Routes>
    </Suspense>
    </>
  );
}

const router = createBrowserRouter([
  { path: "*", element: <Root /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
