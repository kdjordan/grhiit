// import { useState } from 'react'
import Header from './components/Header'
import Routes from './AllRoutes'

function App() {

  return (
    <div className="Appflex">
      <Header />
      <div className="main">
        <Routes />
      </div>
      {/* <div className="main container mx-auto bg-grblack mt-24 md:mt-16 h-screen"></div> */}
    </div>
  )
}

export default App
