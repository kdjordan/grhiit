import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "./MenuToggle";
import { useContext } from 'react'
import UserContext from "../UserContext";

export default function Header({ logout }) {
    const { currentUser  } = useContext(UserContext)
    const [isOpen, toggleOpen] = useCycle(false, true);
    
    const sidebar = {
        open: {
            y: 10,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: 10 },
                duration: 1
            }
        },
        closed: {
            y: -400,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
                duration: 2
            }
        }
      };

      function doLogout() {
        toggleOpen()
        logout()
      }
    
    
    return (
        <motion.nav className={`nav bg-grblack border-b border-grwhite  p-4 z-2 w-full flex flex-col justify-content-center`}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
        >
            <div className={`container mx-auto flex items-center justify-between pb-1`}>
                {/* grhiit */}
                <div className="text-grwhite font-osPrimary hover:text-grgrey hover:no-underline text-3xl">
                    <a className="no-underline" href="/">GRHIIT</a>
                </div>
                <MenuToggle toggle={() => toggleOpen()} />
                {/* mobile */}
                {!currentUser ? (
                    <motion.div 
                        className="bg-transparent mx-auto w-full absolute top-16 left-0 z-1 overflow-auto border-b border-grwhite"
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
                    </motion.div>
                ) : (
                    <motion.div 
                    className="bg-grblack mx-auto w-full absolute top-16 left-0 z-1 overflow-auto border-b border-grwhite"
                    variants={sidebar}
                >
                    <ul className="list-none text-xl flex flex-col items-center justify-content-center gap-2 pt-2 pb-2">
                        <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/signup">CREATE</a>
                        </li>
                        <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/login">DASHBOARD</a>
                        </li>
                        <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" onClick={doLogout}>LOGOUT</a>
                        </li>
                    </ul>
                </motion.div>
                )
                    
                }
            </div>
        </motion.nav>
    )
  }
