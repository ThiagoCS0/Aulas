import { useState } from 'react'
import TimerComponent from './components/lifeCycle'
import UserProfile from './components/User'
import Noticias from './components/Noticias'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TimerComponent /> */}
      <Noticias />
    </>
  )
}

export default App