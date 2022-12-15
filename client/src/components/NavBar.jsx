import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "./MenuToggle";
import { useContext } from 'react'
import UserContext from "../UserContext";

export default function Header({ logout }) {
    const { currentUser  } = useContext(UserContext)
    const [ isOpen, toggleOpen ] = useCycle(false, true);
    
    const sidebar = {
        open: {
            x: '-1rem',
            // y: '-.5rem',
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        closed: {
            x: 2000,
            // y: '-.5rem',
            opacity: 1,
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
        <motion.nav className={`nav bg-grblack border-b border-grred p-4 w-full flex flex-col justify-content-center`}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            >
            <div className={`container mx-auto flex items-center justify-between`}>
                {/* grhiit */}
                <div className="text-grwhite font-osPrimary hover:text-grgrey hover:no-underline text-3xl">
                    <a className="no-underline tracking-widest" href="/">GRHIIT</a>
                </div>
                <MenuToggle toggle={() => toggleOpen()} />
                {/* mobile */}
            </div>
                {!currentUser ? (
                    <motion.aside 
                        className="bg-grblack relative w-full h-screen top-[4.2rem] overflow-auto"
                        variants={sidebar}
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
                ) : (
                    <motion.aside 
                    className="bg-grblack fixed w-full h-screen top-[4.2rem] overflow-auto"
                    variants={sidebar}
                    >
                    <ul className="list-none text-xl flex flex-col items-center justify-content-center gap-2 pt-2 pb-2">
                        <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/create">CREATE</a>
                        </li>
                        <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/dashboard">DASHBOARD</a>
                        </li>
                        <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" onClick={doLogout} href="#">LOGOUT</a>
                        </li>
                    </ul>
                </motion.aside>
                )
                    
                }
            
        </motion.nav>
    )
  }
