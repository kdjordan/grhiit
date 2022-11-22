// import { useState } from 'react'
import Header from './components/Header'
import AnimatedRoutes from './AnimatedRoutes'

import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main font-osPrimary">
          <AnimatedRoutes />
        </div>
      </Router>
      {/* <div className="main container mx-auto bg-grblack mt-24 md:mt-16 h-screen"></div> */}
    </div>
  )
}

export default App
