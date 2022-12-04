import { useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import AnimatedRoutes from './AnimatedRoutes'
import LocalStorage from './LocalStorage'
import Auth from './Auth/Auth.js'
import Grhiit from './Api'
import UserContext from './UserContext'
import { useJwt, isExpired, decodeToken } from "react-jwt";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [token, setToken] = useState(LocalStorage.getLocalStorage());
  const [currentUser, setCurrentUser] = useState(null);

  async function login(form) {
    // got a user logging in  => grab their token and put in localstorage
    try {
      let token = await Auth.login(form) 
      setToken(token)
      LocalStorage.setLocalStorage(token)
      return { success: true }
    } catch (error) {
      return { success: false, error }
    }
  }

  function logout() {
    LocalStorage.setLocalStorage(null)
    setCurrentUser(null)
  }

  useEffect(() => {
    async function getUser() {
      if (token) {
        let { username }  = decodeToken(token)
        Grhiit.token = token
        let user = await Grhiit.getUser(username)
        setCurrentUser(user)
        console.log('gettUser in app ', user)
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
        <Navbar logout={logout}/>
      <Router>
        <div className="main font-osPrimary">
          <AnimatedRoutes signup={signup} login={login} />
        </div>
      </Router>
    </div>
    </UserContext.Provider>
  )
}

export default App


