import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Timer from './Timer'

export default function PlayDisplay({ data }) {
    const [ background, setBackground ] = useState(null)
    const [ duration, setDuration ] = useState('')
    const [ activity, setactivity ] = useState('')
    const [ rounds, setRounds ] = useState(0)
    // console.log('got data in playdisplay ', data)
    const waitBackground = "bg-amber-400"
    const restBackground = "bg-green-800 text-grwhite"
    const workBackground = "bg-grred text-grwhite"

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function applyBackground(type) {
        switch(type) {
            case ('start'):
                setBackground(waitBackground)
                break;
            case ('rest'): 
                setBackground(restBackground)
                break;
            case ('work'): 
                setBackground(workBackground)
                break;
        }
    }

    function isWorkInterval() {
        if (data.type.toLowerCase() !== 'rest' && data.type.toLowerCase() !== 'start') {
            return true
        }
        return false
    }

    useEffect(() => {
        async function runInterval() {
            applyBackground(data.movement)
            for (let i=0 ; i < data.rounds ; i++) {
                setRounds(data.rounds - i)
                console.log('got data to play', (data.type.toLowerCase() == 'regular'))
                if (data.type.toLowerCase() == 'regular') {
                    setactivity('REST')
                    applyBackground('rest')
                    setDuration(+data.rest)
                    await delay(+data.rest * 1000)
                    console.log('the switch')
                    setactivity('WORK')
                    applyBackground('work')
                    setDuration(+data.work)
                    await delay(+data.work * 1000)
                }
            }
        }
        runInterval()
        
    }, [data])

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
                    <h4 className='uppercase text-8xl mb-16 p-8 border border-grblack rounded-lg bg-zinc-400'>{data.movement}</h4>
                    <Timer duration={duration} activity={activity} rounds={rounds}/>
                </div>
            ) : (

            '')}
        </motion.div>
    )
}