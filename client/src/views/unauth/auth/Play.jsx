import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from "react-router-dom"
import UserContext from '../../../UserContext'
import { useContext } from 'react'
import PlayDisplay from './PlayDisplay'

export default function Play() {
    const { currentUser } = useContext(UserContext)
    const [ play, setPlay ] = useState(false)
    const [ currentInterval, setCurrentInterval ] = useState(null)
    const { id } = useParams()

    const data = [
        {
            movement: 'burpee',
            abbreviation: 'BRP',
            work: '20',
            rest: '10',
            rounds: '8'
        },
        {
            movement: 'rest',
            abbreviation: 'rest',
            work: '0',
            rest: '30',
            rounds: '1'
        },
        {
            movement: 'burpee',
            abbreviation: 'BRP',
            work: '20',
            rest: '10',
            rounds: '8'
          },
      ]    

    function togglePlay() {
        setPlay(p => p = !p)
        runSession()
    }
    
    function runSession() {
        console.log('running session')
        setCurrentInterval(data[1])
        // for (let i=0 ; i < data.length ; i++) {
        //     console.log(data[i])
        // }
        
    }

      return (
        <motion.div 
            className="container mx-auto text-3xl md:text-5xl h-screen text-grwhite flex flex-col items-center mt-24"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}  
            key="page"
        >
            <div className="container mx-auto flex flex-col align-center justify-content-center gap-2 mb-8">
            <h2 className="mb-4 text-center">LET'S GO !</h2>
                <h4 className="text-4xl text-center">YOUR TRAINING SESSION : {id}</h4>
            </div>
            {currentUser ? (
                <>
                {data.map((int, i) => (
                        <div 
                        className='mb-2 text-xl text-grgrey shadow-md hover:bg-gray-700'
                        key={i}
                    >
                        {int.work==='0'? (
                            <div className='max-w-sm p-4 dark:bg-green-600 rounded-lg'>
                                <span>REST&nbsp;:&nbsp;</span>    
                                <span>{int.rest} seconds</span>
                            </div>
                        ) : (
                            <div className='max-w-sm p-4 bg-grred border-gray-700 rounded-lg'>
                            <span>{int.abbreviation}&nbsp;:&nbsp;</span>
                            <span>{int.rounds}i</span>
                            <span>&nbsp;@&nbsp;{int.work}</span>
                            <span>X{int.rest}</span>
                            </div>
                        )
                    }
                    </div>
                ))}  
                </>
            ) : (
                <h2>Loading</h2>
            )}
            <button
                onClick={togglePlay}
                className="w-1/6 mx-auto self-center text-center text-3xl sm:textxl py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
            >GO</button>
            <AnimatePresence>
            {play && (
                    <PlayDisplay data={currentInterval} />
            )}
        </AnimatePresence>
        </motion.div>
    )
}