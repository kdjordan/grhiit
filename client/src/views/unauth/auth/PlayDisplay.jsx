import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Timer from './Timer'

export default function PlayDisplay({ data }) {
    const [ background, setBackground ] = useState(null)
    console.log('got data in playdisplay ', data)
    const waitBackground = "bg-amber-400"
    const restBackground = "bg-green-800"
    const workBackground = "bg-grred"

    useEffect(() => {
        console.log('runnin in play', data.work)
        if (data.work === '0' || data.movement.toLowerCase() === 'rest') {
            console.log('setting back ')
            setBackground(restBackground)
        }
            
    }, [])

    return (
        <motion.div
            className={`w-full absolute top-0 text-3xl md:text-5xl text-grblack ${background}  h-screen`}
            initial={{ y: '100vh' }}
            animate={{ y: '0vh' }}
            exit={{ y: '100vh' }}
            transition={{duration: 1}}
            key="overlay"
            >
            <div 
                className="container mx-auto flex flex-col w-full mt-16 items-center">
                <h4 className='uppercase'>{data.movement}</h4>
                <Timer duration={5} />
            </div>
        </motion.div>
    )
}