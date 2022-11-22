import { useState, useEffect } from 'react';


export default function Header() {
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 640) {
            setOpen(false)
          }
        }
        window.addEventListener('resize', handleResize)
    })


    function toggleMenu() {
        setOpen(o => !o)
    }
    
    // if(!isLoggedIn) {
        return (
            <nav className={`nav bg-grred p-2 z-1 w-full flex flex-col justify-content-center`}>
                <div className={`container mx-auto flex items-center justify-between pb-1`}>
                    {/* grhiit */}
                    <div className="text-grwhite font-osPrimary hover:text-grgrey hover:no-underline text-3xl">
                        <a className="no-underline" href="#">GRHIIT</a>
                    </div>
                    {/* button */}
                    <button 
                        className="md:hidden focus:outline-none text-grwhite cursor-pointer self-end text-4xl" 
                        onClick={toggleMenu}
                    >
                        {open ? <>&times;</> : <>&#9776;</>}
                    </button>
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
