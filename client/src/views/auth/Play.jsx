/**
 * PARENT COMPONENT : Dashboard.jsx (route rendered in AnimatedRoutes)
 * PROPS : none
 * This component controls Play view and utilizes the PlayDisplay.jsx to show and coach the user through 
 * the workout.
 * 
 * RETURNS => the Play view
 */
import { useState, useContext } from 'react'
import { useQuery } from 'react-query';
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from "react-router-dom"
import UserContext from '../../UserContext';
import PlayDisplay from '../../components/play/PlayDisplay'
import Grhiit from '../../Api';


export default function Play() {
    const { currentUser } = useContext(UserContext)
    const [ play, setPlay ] = useState(false)
    const [ currentInterval, setCurrentInterval ] = useState({})
    const { id } = useParams()

    //get theindividual workout and prepare it to run
    async function getWorkout() {
        const res = await Grhiit.getWorkoutById(id);
        //add wait interval at begining
        res.unshift({
            type: 'wait',
            movementName: 'GET READY',
            work: 0,
            rest: 10,
            rounds: 1
        })
        //add cooldown interval at end
        res.push({
            type: 'end',
            movementName: 'COOL DOWN',
            work: 0,
            rest: 30,
            rounds: 1
        })
        return res
      }

    const { data, status } = useQuery('workouts', getWorkout)

    //delay function to slow down loops and control when data is passed to the PlayDisplay component
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    //start the workout and loop throug the retrieved workout.data from the DB
    //one iteration at a time
    async function runSession() {
        setPlay(true)
        for (let i=0 ; i < data.length ; i++) {
            setCurrentInterval(data[i])
            await delay(((data[i].work + data[i].rest) * data[i].rounds)* 1000) 
        }
        setPlay(false)
    }

      return (
        <motion.div 
            className="container mx-auto text-3xl md:text-5xl h-screen text-grwhite flex flex-col items-center"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}  
            key="page"
        >
            <div className="flex flex-col items-center justify-content-center gap-2 mb-8 p-8 shadow-black shadow-xl">
                <h2 className="mb-4 text-center">LET'S GO !</h2>
                <h4 className="text-4xl text-center">YOUR TRAINING SESSION : {id}</h4>
            
            {currentUser ? (
                <>
                {data.map((int, i) => (
                        <div 
                        className='text-center w-1/2 mb-2 text-xl text-grgrey shadow-2xl hover:bg-gray-700'
                        key={i}
                    >
                        {(int.type==='rest') ? (
                            <div className='max-w-sm p-4 dark:bg-green-600 rounded-lg'>
                                <span>REST&nbsp;:&nbsp;</span>    
                                <span>{int.rest} seconds</span>
                            </div>
                        ) : (int.type==='regular') ? (
                            <div className='max-w-sm p-4 bg-grred border-gray-700 rounded-lg'>
                            <span>{int.movementAbbrv}&nbsp;:&nbsp;</span>
                            <span>{int.rounds}i</span>
                            <span>&nbsp;@&nbsp;{int.work}</span>
                            <span>X{int.rest}</span>
                            </div>
                        ) : ('')
                    }
                    </div>
                ))}  
                </>
            ) : (
                <h2>Loading</h2>
            )}
            <button
                onClick={runSession}
                className="w-5/6 mx-auto text-center text-3xl sm:textxl py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
            >START SESSION</button>
            </div>
            <AnimatePresence>
            {play && (
                    <PlayDisplay data={currentInterval} />
            )}
        </AnimatePresence>
        </motion.div>
    )
}