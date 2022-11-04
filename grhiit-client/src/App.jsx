import { useState } from 'react'
import Header from './components/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
     <h1>GRHIIT</h1>
    </div>
  )
}

export default App
