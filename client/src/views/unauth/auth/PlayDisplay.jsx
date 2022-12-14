import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Timer from './Timer'

export default function PlayDisplay({ data }) {
    const [ background, setBackground ] = useState(null)
    const [ activeDuration, setDuration ] = useState('0')
    // console.log('got data in playdisplay ', data)
    const waitBackground = "bg-amber-400"
    const restBackground = "bg-green-800 text-grwhite"
    const workBackground = "bg-grred text-grwhite"

    function getDuration() {
        let dur = ((+data[i].work + +data[i].rest) * +data[i].rounds) * 1000
        console.log('setting duration', i, (+data[i].work + +data[i].rest) * +data[i].rounds)
        setDuration((+data[i].work + +data[i].rest) * +data[i].rounds)
    }

    useEffect(() => {
        console.log('runnin in play', data.color)
        if (data.color === 'yellow') {
            setBackground(waitBackground)
        } else if (data.color === 'green') {
            console.log('setting back ')
            setBackground(restBackground)
        } else if (data.color === 'red') {
            setBackground(workBackground)
        }
    }, [data])

    // useEffect(() => {
    //     setDuration(duration)
    // },[duration])

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