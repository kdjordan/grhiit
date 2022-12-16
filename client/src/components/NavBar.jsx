import { motion, useCycle, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { useContext } from 'react'
import UserContext from "../UserContext";

export default function Header({ logout }) {
    const { currentUser  } = useContext(UserContext)
    const [ isOpen, setIsOpen ] = useState(false);
    
    const sidebar = {
        open: {
            x: '0%',
            // y: '-.5rem',
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        closed: {
            x: '-100%',
            // y: '-.5rem',
            opacity: 0,
            transition: {
                duration: 1
            }
        }
      };

      function doLogout() {
        toggleOpen()
        logout()
      }
    
    
    return (
        <motion.nav 
            className="navbar absolute top-0 bg-grblack border-b border-zinc-300 p-4 w-full flex flex-col justify-content-center z-50"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}
            >
            <div className="container mx-auto flex items-center justify-between">
                {/* grhiit */}
                <div className="text-grwhite font-osPrimary hover:text-grgrey hover:no-underline text-3xl">
                    <a className="no-underline tracking-widest" href="/">GRHIIT</a>
                </div>
                <button className="text-white" onClick={() => setIsOpen(!isOpen)}>X</button>
                {/* mobile */}
            </div>
            <AnimatePresence>
                {isOpen &&  (
                    <motion.aside 
                        className="bg-grblack w-full h-screen overflow-auto hidden"
                        intial="closed"
                        animate="open"
                        exit="closed"
                        variants={navbar}
                    >
                        <ul className="list-none text-xl flex flex-col items-center justify-content-center gap-2 pt-2 pb-2">
                            <li>
                                <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/signup">SIGNUP</a>
                            </li>
                                <li>
                                <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/login">LOGIN</a>
                            </li>
                        </ul>
                    </motion.aside>
                // ) : (
                //     <motion.aside 
                //     className="bg-grblack w-full h-screen overflow-auto hidden"
                //     variants={sidebar}
                //     >
                //     <ul className="list-none text-xl flex flex-col items-center justify-content-center gap-2 pt-2 pb-2">
                //         <li>
                //             <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/create">CREATE</a>
                //         </li>
                //         <li>
                //             <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/dashboard">DASHBOARD</a>
                //         </li>
                //         <li>
                //             <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" onClick={doLogout} href="#">LOGOUT</a>
                //         </li>
                //     </ul>
                // </motion.aside>
                )
            }
            </AnimatePresence>
            
        </motion.nav>
    )
  }
