import { motion, useCycle } from "framer-motion"


export default function Header() {
    const [open, cycleOpen] = useCycle(false, true);

    // if(!isLoggedIn) {
        return (
            <nav className="nav bg-grred p-2 mt-0 z-1 w-full top-0">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-grwhite font-osPrimary">
                        <a className="no-underline hover:text-grgrey hover:no-underline text-2xl pl-2" href="#">
                            GRHIIT
                        </a>
                    </div>
                    <div>
                        <button className="text-3xl z-99 md:hidden focus:outline-none text-grwhite cursor-pointer" onClick={cycleOpen}>{open ? 'Close' : "Open"}</button>
                    </div>
                    <div className="md:flex pt-2 items-center justify-between font-osPrimary hidden">
                        <ul className="list-none md:flex justify-between items-center hidden">
                            <li className="mr-3">
                                <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline py-2 px-4" href="#">SIGNUP</a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline py-2 px-4" href="#">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                    {open && 
                    (<motion.aside intital={{height:0}} animate={{height:'100vh'}}>
                        <div className="mobileMenu absolute left-0 top-0 bg-grred w-full text-grwhite flex flex-col">
                            <div>
                                <button className="text-3xl self-end"></button>
                            </div>
                            <ul className="list-none text-3xl flex flex-col justify-content-center w-full gap-3 items-center">
                                <li>
                                    <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/signup">SIGNUP</a>
                                </li>
                                    <li>
                                    <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/login">LOGIN</a>
                                </li>
                            </ul>
                        </div>
                    </motion.aside>
                    )}
                </div>
            </nav>
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
