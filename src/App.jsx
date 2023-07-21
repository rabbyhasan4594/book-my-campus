import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './Share/NavigationBar/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar></NavigationBar>
    </>
  )
}

export default App
