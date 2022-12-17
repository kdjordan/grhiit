import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./views/unauth/Home";
import Signup from "./views/unauth/Signup";
import Login from "./views/unauth/Login"
import Logout from "./views/unauth/Logout";
import Dashboard from "./views/unauth/auth/Dashboard";
import Play from "./views/unauth/auth/Play";
import Create from "./views/unauth/auth/Create";
import ProtectedRoute from "./components/ProtectedRoute";
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes({ signup, login, logout }) {  
  const location = useLocation()
  
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login login={login}/>} />
            <Route path="/logout" element={<Logout logout={logout}/>} />
            <Route path="/signup" element={<Signup signup={signup}/>} />
            <Route path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute> 
            } />
            <Route path="/create" 
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute> 
            } />
            <Route path="/play/:id" 
              element={
                <ProtectedRoute>
                  <Play />
                </ProtectedRoute> 
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    )
}

