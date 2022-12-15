import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Timer from './Timer'

export default function PlayDisplay({ data }) {
    //need hsl not tailwind classes for animating backgroundColor
    const waitBackground = "hsl(43,96%,56%)"
    const restBackground = "hsl(141,74%,37%)"
    const workBackground = "hsl(357,77%,50%)"
    const endBackground = "hsl(217,91%,60%)"

    //state for all controls
    const [ background, setBackground ] = useState(waitBackground)
    const [ duration, setDuration ] = useState(null)
    const [ type, setType ] = useState(null)
    const [ prompt, setPrompt ] = useState('')
    const [ rounds, setRounds ] = useState(0)
    const [ timeLeft, setTimeLeft ] = useState(duration);
    

    //this performs our countdown fn that updates the timer function for display on screen
    useEffect(() => {
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
      }, [timeLeft]);
    
    //resloves a simple promise after a delay so we can slow down the iterations of our for loop
    //to account for each round of intervals
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    //this updates the useState properties and those properties are passed to the
    //Timer component which renders our instructions to the screen
    function setCountdownDisplay(type) {
        switch(type) {
            case ('wait'):
                setType('noshow')
                setBackground(waitBackground)
                setPrompt('GET READY')
                setDuration(data.rest)
                setTimeLeft(data.rest)
                break;
            case ('rest'): 
                setType('show')
                setBackground(restBackground)
                setPrompt('REST')
                setDuration(data.rest)
                setTimeLeft(data.rest)
                break;
            case ('work'): 
                setType('show')
                setBackground(workBackground)
                setPrompt('WORK')
                setTimeLeft(data.work)
                setDuration(data.work)
                break;
            case('end'): 
                setType('noshow')
                setBackground(endBackground)
                setPrompt('DONE')
                setDuration(data.rest)
                setTimeLeft(data.rest)
        }
    }

    //controls an inner loop of rounds for an interval based on the data passed from Play component
    //the Play component is cycling through each object in an array that is the training session
    //this is triggered by a new object being sent from the Play component
    useEffect(() => {
        async function runInterval() {
            for (let i=0 ; i < data.rounds ; i++) {
                setRounds(data.rounds - i)
                if (data.type.toLowerCase() == 'wait') {
                    setCountdownDisplay('wait')
                    await delay(+data.rest * 1000)
                }
                if (data.type.toLowerCase() == 'end') {
                    setCountdownDisplay('end')
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
            className={`w-full absolute top-0 text-3xl md:text-5xl text-grblack h-screen bg-gradient-to-t from-gray-500 to-${background}`}
            initial={{ y: '100vh' }}
            animate={{ backgroundColor:`${background}`, y: '0vh' }}
            exit={{ y: '100vh' }}
            transition={{duration: .5}}
            key="overlay"
            >
            {data ? (
                <div 
                    className="container mx-auto flex flex-col w-full mt-16 items-center"
                >
                    <h4 className='uppercase text-8xl mb-8 p-8 border border-grblack rounded-lg bg-zinc-300 shadow-2xl'>{data.movement}</h4>
                    <Timer duration={timeLeft} prompt={prompt} rounds={rounds} type={type}/>
                </div>
            ) : (

            '')}
        </motion.div>
    )
}