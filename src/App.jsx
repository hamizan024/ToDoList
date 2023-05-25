import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import DisplayTodos from './components/DisplayTodos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todos/>
      <DisplayTodos/>
    </>
  )
}

export default App
