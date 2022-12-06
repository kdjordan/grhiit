import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    return (
        <motion.div 
            className="h-screen text-grwhite flex flex-col items-center w-full  mt-24 gap-3"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            <div className="flex flex-col lg:text-9xl text-5xl items-center w-1/2 mx-auto bg-gradient-to-b from-grred to-transparent px-6 py-4 rounded shadow-md text-grgrey">
                <h2>ALL IT TAKES</h2>
                <h2>IS</h2>
                <h2>ALL YOU GOT</h2>
            </div>
            <button 
                className="mt-8 text-2xl  bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none rounded px-16 py-2"
                onClick={() => navigate('/signup')}
            >
                SIGN UP
            </button>
            <button 
                className="mt-8 text-2xl  bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none rounded px-16 py-2"
                onClick={() => navigate('/login')}
            >
                LOG IN
            </button>
        </motion.div>
    )
}