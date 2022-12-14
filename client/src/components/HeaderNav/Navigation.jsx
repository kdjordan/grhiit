/**
 * PARENT COMPONENT : NavBar.jsx 
 * PROPS : toggle -> passes the click up to the parent to switch state open or !open
 * Defines the paths (menu items) that are avaialable based on user logged in or out status
 * Passes items down to MenuItem for display
 * RETURNS -> the menu items based on user logged in or out
 */

import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useContext } from 'react';
import UserContext from "../../UserContext";
import React from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({ toggle }) => {
  const { currentUser  } = useContext(UserContext)
  let items
  if(!currentUser) {
    items = [
      {
        name: "LOGIN",
        path: "/login"
      },
      {
        name: "SIGNUP",
        path: "/signup"
      }
    ]
  } else {
    items = [
      {
        name: "DASHBOARD",
        path: "/dashboard"
      },
      {
        name: "CREATE",
        path: "/create"
      },
      {
        name: "PROFILE",
        path: "/profile"
      },
      {
        name: "LOGOUT",
        path: "/logout"
      },
    ]
  }
  return (
    <motion.ul variants={variants} className="p-[25px] mt-16 width-[250px]">
      {items.map((it, i) => (
        <MenuItem name={it.name} path={it.path} key={i} toggle={toggle} />
      ))}
    </motion.ul>
  );
}

