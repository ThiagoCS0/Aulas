import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'
import Contatos from './components/Contato'
import Header from './components/Header'
function App() {

  return (
    <>
      <Router> {/*Tudo que trabalha com roteamento*/}
        <Header />
        <Routes> {/*Todas as rotas de navegação*/}
          {/* <Route path='/' Component={Inicio} />
          <Route path='/sobre' Component={Sobre} />
          <Route path='/contatos' Component={Contatos} /> */}
          <Route path='/' Component={Inicio} />
          <Route path='/sobre' Component={Sobre} />
          <Route path='/contatos' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
