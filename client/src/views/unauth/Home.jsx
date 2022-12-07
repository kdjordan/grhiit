import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    return (
        <motion.div 
            className="h-screen text-grwhite flex flex-col items-center w-full mt-12 md:mt-24 gap-3"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            <div className="flex flex-col mx-auto items-center text-3xl md:text-6xl w-2/3 md:w-1/2 bg-gradient-to-b from-grred to-transparent px-6 py-4 rounded shadow-md text-grgrey">
                <h2>ALL IT TAKES</h2>
                <h2>IS</h2>
                <h2>ALL YOU GOT</h2>
            </div>
            <button 
                className="mt-8 text-base md:text-2xl bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none rounded px-8 py-2 md:px-16"
                onClick={() => navigate('/signup')}
            >
                SIGN UP
            </button>
            <button 
                className="mt-8 text-base md:text-2xl bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none rounded px-8 py-2 md:px-16"
                onClick={() => navigate('/login')}
            >
                LOG IN
            </button>
        </motion.div>
    )
}