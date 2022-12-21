import { useState, useEffect } from 'react'
import Navbar from './components/HeaderNav/NavBar'
import AnimatedRoutes from './AnimatedRoutes'
import LocalStorage from './LocalStorage'
import Auth from './auth/AuthApi.js'
import Grhiit from './Api'
import UserContext from './UserContext'
import { useJwt, isExpired, decodeToken } from "react-jwt";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


function App() {
  const [token, setToken] = useState(LocalStorage.getLocalStorage());
  const [currentUser, setCurrentUser] = useState(null);
  const [toast, setToast] = useState({status: false, message:''})

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
    <UserContext.Provider value={{currentUser, setCurrentUser, logout}}>
    <div className="App">
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={true}/>
      <Router>
        <Navbar />
        <div className="main min-h-screen font-osPrimary py-32 bg-gradient-primary">
          <AnimatedRoutes signup={signup} login={login} logout={logout}/>
        </div>
      </Router>
    </div>
    </UserContext.Provider>
  )
}
export default App


