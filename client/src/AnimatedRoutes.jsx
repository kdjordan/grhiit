import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import React from "react";
// import CompanyList from "./companies/CompanyList";
// import CompanyDetail from "./companies/CompanyDetail";
// import PrivateRoute from "./common/PrivateRoute";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Login from "./views/Login"
// import JobList from "./jobs/JobList";
// import Profile from "./Profile";
// import Login from "./Login";
// import Signup from "./Signup";
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes({ signup, login }) {  
  const location = useLocation()
  console.log(location)

    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login login={login}/>} />
            <Route path="/signup" element={<Signup signup={signup}/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    )
}

