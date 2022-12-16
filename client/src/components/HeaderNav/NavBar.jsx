import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { useContext } from 'react';
import UserContext from "../../UserContext";
import { useDimensions } from "./use-dimensions"
import { Navigation } from "./Navigation";

export default function Header({ logout }) {
    const { currentUser  } = useContext(UserContext)
    const [ isOpen, toggleOpen ] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 150px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 150px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      }

      function doLogout() {
        toggleOpen()
        logout()
      }
    
    
    return (
        <motion.nav 
        className="absolute top-0 right-[-100px] bottom-0 w-[300px] z-99"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            >
            <motion.div className="absolute top-0 right-0 bottom-0 w-[300px] bg-white" variants={sidebar}>
                {/* grhiit */}
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.div>
        </motion.nav>
    )
  }
