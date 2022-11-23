import {motion} from 'framer-motion'

export default function Signup () {
    return (
        <motion.div 
        className="text-grwhite h-screen mt-44"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition: {duration: 0.5}}}        
    >
        <h1>Log In</h1>
    </motion.div>
    )
}