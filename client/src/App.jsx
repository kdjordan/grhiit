import { useState, useEffect } from 'react'
import Header from './components/Header'
import AnimatedRoutes from './AnimatedRoutes'
import LocalStorage from './LocalStorage'
import Grhiit from './Api.js'
import UserContext from './UserContext'
import { useJwt, isExpired, decodeToken } from "react-jwt";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [token, setToken] = useState(LocalStorage.getLocalStorage());
  const [currentUser, setCurrentUser] = useState(null);

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

  useEffect(() => {
    async function getUser() {
      // console.log(token)
      if (token) {
        let { username }  = decodeToken(token)
        Grhiit.token = token
        let curUser = await Grhiit.getUser(username)
        setCurrentUser(curUser)
        console.log(curUser.applications)
        // setApplicationIDs(curUser.applications)
      }
      // setIsLoading(false)
  
    }
    getUser()
  }, [token])

  function signup(form) {
    console.log('signup triggered in APP ', form)
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
    <div className="App">
        <Header />
      <Router>
        <div className="main font-osPrimary">
          <AnimatedRoutes signup={signup} login={login}/>
        </div>
      </Router>
      {/* <div className="main container mx-auto bg-grblack mt-24 md:mt-16 h-screen"></div> */}
    </div>
    </UserContext.Provider>
  )
}

export default App
