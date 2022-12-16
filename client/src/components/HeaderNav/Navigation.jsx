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

export const Navigation = () => {
  const { currentUser  } = useContext(UserContext)
  let items
  if(!currentUser) {
    items = [
      {
        name: "LOGIN",
        path: "/login"
      },
      {
        name: "LOGOUT",
        path: "/logout"
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
        name: "PLAY",
        path: "/play"
      },
    ]
  }
  return (
    <motion.ul variants={variants} className="p-[25px] mt-16 width-[250px]">
      {items.map((it, i) => (
        <MenuItem name={it.name} path={it.path} key={i} />
      ))}
    </motion.ul>
  );
}

