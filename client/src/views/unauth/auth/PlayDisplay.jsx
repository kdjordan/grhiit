import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Timer from './Timer'

export default function PlayDisplay({ data }) {
    const waitBackground = "bg-amber-400"
    const restBackground = "bg-green-600 text-grwhite"
    const workBackground = "bg-grred text-grwhite"
    
    const [ background, setBackground ] = useState(waitBackground)
    const [ duration, setDuration ] = useState(null)
    const [ activity, setactivity ] = useState('')
    const [ rounds, setRounds ] = useState(0)
    const [ timeLeft, setTimeLeft ] = useState(duration);
    

    
    useEffect(() => {
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
      }, [timeLeft]);

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    function setCountdownDisplay(type) {
        switch(type) {
            case ('wait'):
                setBackground(waitBackground)
                setactivity('GET READY')
                setDuration(data.rest)
                setTimeLeft(data.rest)
                break;
            case ('rest'): 
                setBackground(restBackground)
                setactivity('REST')
                setDuration(data.rest)
                setTimeLeft(data.rest)
                break;
            case ('work'): 
                setBackground(workBackground)
                setactivity('WORK')
                setTimeLeft(data.work)
                setDuration(data.work)
                break;
        }
    }

    useEffect(() => {
        async function runInterval() {
            
            for (let i=0 ; i < data.rounds ; i++) {
                setRounds(data.rounds - i)
                if (data.type.toLowerCase() == 'wait') {
                    setCountdownDisplay('wait')
                    await delay(+data.rest * 1000)
                }
                if (data.type.toLowerCase() == 'rest') {
                    setCountdownDisplay('rest')
                    await delay(+data.rest * 1000)
                }
                if (data.type.toLowerCase() == 'regular') {
                    setCountdownDisplay('rest')
                    await delay(+data.rest * 1000)
                    setCountdownDisplay('work')
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
            animate={{ backgrounColor:`${background}`, y: '0vh' }}
            exit={{ y: '100vh' }}
            transition={{duration: 1}}
            key="overlay"
            >
            {data ? (
                <div 
                    className="container mx-auto flex flex-col w-full mt-16 items-center"
                >
                    <h4 className='uppercase text-8xl mb-2 p-8 border border-grblack rounded-lg bg-zinc-400'>{data.movement}</h4>
                    <Timer duration={timeLeft} activity={activity} rounds={rounds}/>
                </div>
            ) : (

            '')}
        </motion.div>
    )
}