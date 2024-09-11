import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'app/providers/Theme'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import App from 'app/App'
import 'shared/config/i18n/i18n'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
