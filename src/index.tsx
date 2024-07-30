import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/context/theme';
import App from 'app/App';
import 'shared/config/i18n/i18n';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);