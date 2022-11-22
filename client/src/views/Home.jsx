import { motion } from 'framer-motion'

export default function Home() {
    return (
        <motion.div 
            className="lg:text-9xl text-5xl h-screen text-grwhite flex flex-col w-full items-center lg:mt-16 mt-16 gap-3"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 1}}}    
        >
            <h2>ALL IT TAKES</h2>
            <h2>IS</h2>
            <h2>ALL YOU GOT</h2>
            <button className="mt-8 text-2xl bg-grred text-grwhite rounded px-16 py-2">SIGN UP</button>
            <button className="mt-8 text-2xl bg-grred text-grwhite rounded px-16 py-2">LOG IN</button>
        </motion.div>
    )
}