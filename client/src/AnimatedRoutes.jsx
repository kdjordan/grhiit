import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useContext } from 'react'
// import React from "react";
// import CompanyList from "./companies/CompanyList";
// import CompanyDetail from "./companies/CompanyDetail";
// import PrivateRoute from "./common/PrivateRoute";
import Home from "./views/unauth/Home";
import Signup from "./views/unauth/Signup";
import Login from "./views/unauth/Login"
import Dashboard from "./views/unauth/auth/Dashboard";
import Create from "./views/unauth/auth/Create";
// import JobList from "./jobs/JobList";
// import Profile from "./Profile";
// import Login from "./Login";
// import Signup from "./Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes({ signup, login }) {  
  const location = useLocation()
  
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login login={login}/>} />
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
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    )
}

