import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { UserContextProvider } from './Context/UserContext'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>User Context API Tutorial</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App
