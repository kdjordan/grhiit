/**
 * BASE COMPONENT FOR APPLICATION
 * Functions :
 * User State -> checks if token is present in local storage and logs user in if so
 * -> passes user information in useContext so other components can use
 * Login -> calls API to log in user and thus set token / fn also shared in Context for Login component
 * Logout -> logs out use through a 'callback' compnenet rendered in Animated Routes / clears local storage of token
 * React Query -> used for fetching workouts in Dashboard component
 * Toast -> makes toast notifications available globally
 */
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import { useState, useEffect } from 'react'
import Navbar from './components/headernav/NavBar'
import AnimatedRoutes from './AnimatedRoutes'
import LocalStorage from './LocalStorage'
import Auth from './auth/AuthApi.js'
import Grhiit from './Api'
import UserContext from './UserContext'
import { decodeToken } from "react-jwt";
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ToastChildTheme.css';


function App() {
  const [token, setToken] = useState(LocalStorage.getLocalStorage());
  const [currentUser, setCurrentUser] = useState(null);

  async function login(form) {
    // got a user logging in  => grab their token and put in localstorage
    try {
      let token = await Auth.login(form) 
      console.log(token)
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
      console.log(token)
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
      }
      // setIsLoading(false)
  
    }
    getUser()
  }, [token])

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
export default App


