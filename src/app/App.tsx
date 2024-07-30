import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'app/context/theme';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/router';
import { classNames } from 'shared/lib/helpers/classNames';
import 'app/styles/index.scss';

function MyComponent() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.trim() === 'en' ? 'no' : 'en');
  }

  return (
    <>
      <button onClick={toggleLanguage}>Lang</button>
      <h1>{t('Welcome to React')}</h1>
    </>
  )
}

const Root = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback={'Loading...'}>
        <Header />
        <div className='page'>
          <Sidebar />
          <main>
            <MyComponent />
            <AppRouter />
          </main>
        </div>
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
