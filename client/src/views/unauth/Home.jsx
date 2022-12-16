import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    return (
        <motion.div 
            className="container relative mx-auto flex flex-col md:flex-row  align-center shadow-black shadow-xl"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-3 mx-auto items-center text-xl md:text-6xl w-full py-8 md:py-16 rounded text-zinc-300">
                    <div className='bg-gradient-to-r from-slate-100 to-gray-400 bg-clip-text text-transparent 
                                    text-xl md:text-4xl lg:text-4xl uppercase tracking-widest'>Bodyweight Interval Training</div>
                    <h2 className="text-6xl md:text-8xl">ALL IT TAKES</h2>
                    <h2 className="text-6xl md:text-8xl">IS</h2>
                    <h2 className='bg-gradient-to-b from-slate-100 to-gray-400 bg-clip-text text-transparent text-6xl md:text-8xl'>ALL YOU GOT</h2>
                
                <button 
                    className="mt-8 text-base md:text-xl bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none rounded px-8 py-2 md:px-16"
                    onClick={() => navigate('/signup')}
                >
                    SIGN UP
                </button>
                <button 
                    className="mt-4 text-base md:text-xl bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none rounded px-8 py-2 md:px-16"
                    onClick={() => navigate('/login')}
                >
                    LOG IN
                </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 bg-[url('/images/grhiit_cover2.jpg')] grayscale bg-cover bg-no-repeat bg-center">
            </div>
        </motion.div>
    )
}