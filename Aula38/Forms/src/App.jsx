import { useState } from 'react'
import UserCard from './components/UserCard'
const [user, setUser] = useState({ name: 'Velho', age: 100 })
function App() {
  return (
    <>
      <div>
        <UserCard user={user} setUser={setUser} />
      </div>
    </>
  )
}

export default App