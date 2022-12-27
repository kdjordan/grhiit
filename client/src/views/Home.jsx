import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    
    const navigate = useNavigate();
    return (
        <motion.div 
            className="container mx-auto flex flex-col md:flex-row align-center shadow-black shadow-xl"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            <div className="w-full md:w-1/2 relative z-0">
                <div className="flex flex-col 
                    mx-auto items-center text-xl md:text-6xl 
                    w-full py-8 md:pt-4 md:pb-24 rounded text-zinc-300"
                >
                    <div className="bg-gradient-to-r from-slate-100 to-gray-400 
                        bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl 
                        uppercase tracking-widest mb-4 md:mb-8">
                            Bodyweight Interval Training
                    </div>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl mb-2">
                        ALL IT TAKES
                    </h2>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl mb-2">
                        IS
                    </h2>
                    <h2 className="bg-gradient-to-b from-slate-100 to-gray-400 
                        bg-clip-text text-transparent text-6xl md:text-7xl 
                        lg:text-8xl mb-8 md:mb-12">
                            ALL YOU GOT
                    </h2>
                
                <button 
                    className="mb-4 md:m-8 w-1/2 text-base md:text-xl bg-grred text-grwhite hover:bg-grwhite
                        hover:text-grred duration-300 focus:outline-none rounded px-8 py-2 md:px-16"
                    onClick={() => navigate('/signup')}
                >
                    SIGN UP
                </button>
                <button 
                    className=" w-1/2 text-base md:text-xl bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none rounded px-8 py-2 md:px-16"
                    onClick={() => navigate('/login')}
                >
                    LOG IN
                </button>
                </div>
            </div>
            <div className="hidden md:block lg:block md:w-1/2 bg-[url('/images/grhiit_cover2.jpg')] grayscale bg-no-repeat bg-cover bg-center">
            </div>
        </motion.div>
    )
}