// import MyChildren from "./components/Filho"; import { MyProvider } from "./components/Contexto";]
import { useState, createContext, useContext } from "react"
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => { } })

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme == 'light' ? 'dark' : 'light')
  }

  return (
    <>
      {/* <MyProvider> <MyChildren /> </MyProvider> */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>
          <Toolbar />
          <button onClick={toggleTheme}>Troca tema</button>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

function Toolbar() {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{ background: theme == 'dark' ? '#000' : '#AAA', color: theme == 'dark' ? '#FFF' : '#000', padding: '20px', borderRadius: '4px', margin: '8px' }}>
      Tema utilizado - {theme}
    </div>
  )
}

export default App
