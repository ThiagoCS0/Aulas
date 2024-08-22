import { MyProvider } from "./components/Contexto"
import MyChildren from "./components/Filho"
function App() {

  return (
    <>
      <MyProvider>
        <MyChildren />
      </MyProvider>
    </>
  )
}

export default App
