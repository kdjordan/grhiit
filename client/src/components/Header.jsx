import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "./MenuToggle";

export default function Header() {
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
    
    
    // if(!isLoggedIn) {
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
                </div>
            </motion.nav>
        )
    }
    // else {
    //     return (
    //         <nav className="nav bg-grred p-2 mt-0 z-4 w-full top-0">
    //             <div class="container mx-auto flex flex-wrap items-center">
    //                 <div class="flex w-full md:w-1/2 justify-center md:justify-start text-grwhite font-osPrimary">
    //                     <a class="text-grwhite no-underline hover:text-grgrey hover:no-underline" href="#">
    //                         <span class="text-2xl pl-2"><i class="em em-grinning"></i>GRHIIT</span>
    //                     </a>
    //                 </div>
    //                 <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end font-osPrimary">
    //                     <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
    //                     <li class="mr-3">
    //                         <a class="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline py-2 px-4" href="#">SESSIONS</a>
    //                     </li>
    //                     <li class="mr-3">
    //                         <a class="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline py-2 px-4" href="#">CREATE</a>
    //                     </li>
    //                     <li class="mr-3">
    //                         <a class="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline py-2 px-4" href="#">PROFILE</a>
    //                     </li>
    //                     <li class="mr-3">
    //                         <a class="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline py-2 px-4" href="#">LOGOUT</a>
    //                     </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>
    //     )
    // }
// }
