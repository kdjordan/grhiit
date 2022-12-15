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

  async function signup(form) {
    // got a user signing up => grab their token and put in localstorage
    console.log('firing in app ', form)
    try {
      let token = await Auth.signup(form) 
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
        // setApplicationIDs(curUser.applications)
      }
      // setIsLoading(false)
  
    }
    getUser()
  }, [token])

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
    <div className="App bg-gradient-to-b from-grred to-transparent">
        <Navbar logout={logout}/>
      <Router>
        <div className="main font-osPrimary min-h-screen">
          <AnimatedRoutes signup={signup} login={login} />
        </div>
      </Router>
    </div>
    </UserContext.Provider>
  )
}
////background-image: linear-gradient(180deg, #000000 15%, rgb(226, 29, 38) 100%);min-height:100vh;
export default App


