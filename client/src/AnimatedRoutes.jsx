import { Routes, Route, useLocation } from "react-router-dom";
// import React from "react";
// import CompanyList from "./companies/CompanyList";
// import CompanyDetail from "./companies/CompanyDetail";
// import PrivateRoute from "./common/PrivateRoute";
import Home from "./views/Home";
import Signup from "./views/SignUp";
import Login from "./views/Login"
// import JobList from "./jobs/JobList";
// import Profile from "./Profile";
// import Login from "./Login";
// import Signup from "./Signup";
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes({ login, signup }) {  
  const location = useLocation()

    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </AnimatePresence>
    )
}

 /* <Route exact path="/login">
                <Login login={login}/>
            </Route>
            <Route exact path="/signup">
              <Signup signup={signup}/>
            </Route>
            <PrivateRoute exact path="/companies">
              <CompanyList />
            </PrivateRoute>
            <PrivateRoute exact path="/companies/:handle">
              <CompanyDetail />
            </PrivateRoute>
            <PrivateRoute exact path="/jobs">
              <JobList />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute> */