import { motion } from 'framer-motion'
import { useContext } from 'react'
import UserContext from '../../../UserContext'
import Card from '../../../components/Card'

export default function Dashboard() {
    const { currentUser } = useContext(UserContext)

    const data = [
        {
            id: 1,
            description: 'Test description',
            date: '1/1/2022',
            name: 'Session 4'
        },
        {
            id: 2,
            description: 'Test description 2',
            date: '1/4/2022',
            name: 'Session 5'
        },
    ]

    return (
        <motion.div 
            className="text-3xl md:text-5xl h-screen text-grwhite flex flex-col w-full items-center mt-24 gap-3"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            {currentUser ? (
                <>
                    <h2>WELCOME BACK {currentUser.username}</h2>
                    <div className="flex gap-2">
                        {data.map(d => (
                            <Card name={d.id} key={d.id} description={d.description} date={d.date}/>
                        ))}
                    </div>
                </>
            ) : (
                <h2>Loading</h2>
            )}
            
        </motion.div>
    )
}