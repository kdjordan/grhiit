import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { useContext } from 'react';
import UserContext from "../../UserContext";
import { useDimensions } from "./use-dimensions"
import { Navigation } from "./Navigation";

export default function Header({ logout }) {
    const { currentUser  } = useContext(UserContext)
    const [ isOpen, toggleOpen ] = useCycle(true, false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at  4px 40px)",
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
        <nav>
            <div className="absolute top-4 left-8 text-grwhite font-osPrimary hover:text-zinc-300 hover:no-underline text-5xl">
                <a className="no-underline tracking-widest" href="/">GRHIIT</a>
            </div>
            <motion.nav 
                className="absolute top-0 left-0 bottom-0"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                >
                <motion.div className="absolute top-0 bottom-0 w-[300px] bg-white z-99" variants={sidebar}>
                    {/* grhiit */}
                    <Navigation />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.div>
            </motion.nav>
    </nav>
    )
  }
