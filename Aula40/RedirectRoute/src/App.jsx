import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Inicio from './components/Inicio'
import Login from './components/Login'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProtectedRoute isLoggedIn={false}><Inicio /></ProtectedRoute>} />
          <Route path='/Inicio' element={<ProtectedRoute isLoggedIn={false}><Inicio /></ProtectedRoute>} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
