import React from 'react';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './theme/ThemeProvider';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);