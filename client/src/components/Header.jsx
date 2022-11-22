import { useState } from 'react';


export default function Header() {
    // const [open, cycleOpen] = useCycle(false, true);
    const [open, setOpen] = useState(false)
    


    function toggleMenu() {
        console.log('togglin ', open)
        setOpen(o => !o)
    }
    
    // if(!isLoggedIn) {
        return (
            <nav className="nav bg-grred p-2 z-1 w-full flex flex-col justify-content-center">
                <div className="container mx-auto flex items-center justify-between">
                    {/* grhiit */}
                    <div className="text-grwhite font-osPrimary hover:text-grgrey hover:no-underline text-2xl pl-2">
                        <a className="no-underline" href="#">GRHIIT</a>
                    </div>
                    {/* button */}
                    <div>
                        <button 
                            className="text-3xl md:hidden focus:outline-none text-grwhite cursor-pointer self-end" 
                            onClick={toggleMenu}
                        >
                            {open ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                    </div>
                    {/* not mobile */}
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
                </div>
                {/* mobile */}
                <div className={`bg-grred md:hidden w-full self-end text-grwhite ${open ? 'block' : 'hidden'}`}>
                    <ul className="list-none text-3xl flex flex-col justify-content-center w-full gap-3 items-center pb-2">
                        <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/signup">SIGNUP</a>
                        </li>
                            <li>
                            <a className="inline-block text-grwhite no-underline hover:text-grgrey hover:text-underline" href="/login">LOGIN</a>
                        </li>
                    </ul>
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
