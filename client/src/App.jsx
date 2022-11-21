import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="main container shadow-lg mx-auto bg-grblack mt-24 md:mt-16 h-screen"></div>
    </div>
  )
}

export default App
