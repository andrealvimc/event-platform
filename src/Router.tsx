import { Routes, Route } from 'react-router-dom'
import Event from './pages/Event'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='/event' element={<Event />} />
      <Route path='/event/lesson/:slug' element={<Event />} />
    </Routes>
  )
}