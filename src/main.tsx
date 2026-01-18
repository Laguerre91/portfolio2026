import { Provider } from './Components/ui/provider.tsx'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContactProvider } from './context/ContactContext.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <ContactProvider>
        <App />
      </ContactProvider>
    </Provider>
  </React.StrictMode>,
)
