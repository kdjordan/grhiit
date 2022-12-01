import { motion } from 'framer-motion'
import { useContext } from 'react'
import UserContext from '../../../UserContext'

export default function Dashboard() {
    const { currentUser  } = useContext(UserContext)

    return (
        <motion.div 
            className="text-3xl md:text-5xl h-screen text-grwhite flex flex-col w-full items-center mt-24 gap-3"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            <h2>WELCOME BACK {currentUser.username}</h2>
            
        </motion.div>
    )
}