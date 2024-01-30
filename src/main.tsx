import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
//----------------------------------------------------------------//
import SearchProvider from './core/Providers/SearchProvider.tsx'
import App from './App.tsx'
import Chatbook from './pages/use-effect/compnents/chat-book/ChatBook.tsx'
import Counter from './pages/use-state/components/Counter.tsx'
//------------------------------------------------------------------------//
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='chatbook' element={<Chatbook />} />
            <Route path='counter' element={<Counter />} />
            <Route element={<Navigate to="/chatbook" />} />
            <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here (404)!</p>
              </main>
            }
            />
            <Route index element={<Navigate to="/chatbook" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>,
)
