import {motion} from 'framer-motion'

export default function Signup () {
    return (
        <motion.div 
            className="text-grwhite"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}   
        >
            <h1>Sign UP</h1>
        </motion.div>
    )
}