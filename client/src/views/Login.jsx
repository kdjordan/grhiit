import {motion} from 'framer-motion'

export default function Login () {
    return (
        <motion.div 
            className="text-grwhite"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 1}}}        
        >
            <h1>Log In</h1>
        </motion.div>
    )
}