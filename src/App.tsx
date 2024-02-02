import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './core/sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <section className='w-full h-full flex'>
      <Sidebar key="active" />
      <main className='grow bg-black'>
        <Outlet />
      </main>
    </section >
  )
}

export default App
