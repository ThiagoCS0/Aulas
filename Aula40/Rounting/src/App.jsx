import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'
import Contatos from './components/Contato'
import Header from './components/Header'
function App() {
  {/*
					Router:                   envolve a aplicação e habilita o roteamento; 
					Routes (Switch):          garanti que 1 rota sejá rederizado por vez; 
					Route:                    define rotas;
					Redirecionamento:         é o envio do usuário de uma URL para outra; 
					Navigation (Redirect):    redireciona para outra rota; 
					element (do Navigation):  é mais amplo permitindo mandar mais elementos do jsx;
  */}
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
