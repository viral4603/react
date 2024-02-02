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
import PageNotFound from './core/ErrorPage/PageNotFound.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='chatbook' element={<Chatbook />} />
            <Route path='counter' element={<Counter />} />
            <Route element={<Navigate to="/chatbook" />} />
            <Route path="*" element={<PageNotFound />} />
            <Route index element={<Navigate to="counter" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  </React.StrictMode>,
)
