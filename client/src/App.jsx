import { useState } from 'react'
import Header from './components/Header'
import AnimatedRoutes from './AnimatedRoutes'
import LocalStorage from './LocalStorage'
import Grhiit from './Api.js'

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [token, setToken] = useState(LocalStorage.getLocalStorage());


  async function login(form) {
    // got a user logging in  => grab their token and put in localstorage
    try {
      let token = await Grhiit.login(form) 
      setToken(token)
      LocalStorage.setLocalStorage(token)
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  function signup(form) {
    console.log('signup triggered in APP ', form)
  }

  return (
    <div className="App">
        <Header />
      <Router>
        <div className="main font-osPrimary">
          <AnimatedRoutes signup={signup} login={login}/>
        </div>
      </Router>
      {/* <div className="main container mx-auto bg-grblack mt-24 md:mt-16 h-screen"></div> */}
    </div>
  )
}

export default App
