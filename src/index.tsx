import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/context/theme';
import App from 'app/App';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);