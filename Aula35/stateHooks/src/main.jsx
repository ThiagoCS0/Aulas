import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // Interessante apara debugar: diz quando está usando código despreciado
  //O modo estrito (Strict Mode) é uma ferramenta para sinalizar potenciais problemas em uma aplicação. 
  <StrictMode>
    <App />
  </StrictMode>,
)
