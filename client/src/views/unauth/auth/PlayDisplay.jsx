import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Timer from './Timer'

export default function PlayDisplay({ data, duration }) {
    const [ background, setBackground ] = useState(null)
    const [ activeDuration, setDuration ] = useState(null)
    // console.log('got data in playdisplay ', data)
    const waitBackground = "bg-amber-400"
    const restBackground = "bg-green-800 text-grwhite"
    const workBackground = "bg-grred text-grwhite"

    useEffect(() => {
        console.log('runnin in play', data.color, duration)
        if (data.color === 'yellow') {
            setBackground(waitBackground)
        } else if (data.color === 'green') {
            console.log('setting back ')
            setBackground(restBackground)
        } else if (data.color === 'red') {
            setBackground(workBackground)
        }
    }, [data])

    useEffect(() => {
        setDuration(duration)
    },[duration])

    return (
        <motion.div
            className={`w-full absolute top-0 text-3xl md:text-5xl text-grblack h-screen ${background}`}
            initial={{ y: '100vh' }}
            animate={{ y: '0vh' }}
            exit={{ y: '100vh' }}
            transition={{duration: 1}}
            key="overlay"
            >
            {data ? (
                <div 
                    className="container mx-auto flex flex-col w-full mt-16 items-center">
                    <h4 className='uppercase'>{data.movement}</h4>
                    <Timer duration={activeDuration} />
                </div>
            ) : (

            '')}
        </motion.div>
    )
}