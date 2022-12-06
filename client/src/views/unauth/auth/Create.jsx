// import { useDrag, useDrop } from 'react-dnd';
import { motion } from 'framer-motion'
import { useState } from 'react'
import AddInterval from '../../../components/AddInterval'
import Interval from '../../../components/Interval'

export default function Create() {
    const [intervals, setIntervals] = useState([])

    function addInterval(form) {
        setIntervals(int => [...int, form])
    }

    function deleteInterval(id) {
        console.log('should delete ', id)
    }

    return (
        <motion.div 
        className="container mx-auto text-3xl md:text-5xl h-screen text-grwhite flex flex-col items-center mt-24"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition: {duration: 0.5}}}        
        >
        <h1 className="mb-8 text-center text-grwhite w-full">TRAINING SESSION BUILDER</h1> 
        <AddInterval addInterval={addInterval}/>
        <h2 className="mb-8 text:xl md:text-3xl text-center text-grwhite w-full">INTERVALS</h2>
        {intervals.length > 0 ? (
            <>
                {intervals.map((i) => (
                    <Interval 
                        key={i.id} 
                        id={i.id} 
                        movement={i.movement} 
                        abbreviation={i.abbreviation} 
                        work={i.work} 
                        rest={i.rest} 
                        rounds={i.rounds}
                        deleteInterval={deleteInterval}/>
                ))}
                <div className="flex align-center w-64">
                    <button
                        type="submit"
                        className="w-full mx-auto self-center text-center text-2xl py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                    >SAVE WORKOUT</button>
                </div> 
            </>
        ) : (
            <h2>No intervals yet :(</h2>
        )}
        </motion.div>
    )
}