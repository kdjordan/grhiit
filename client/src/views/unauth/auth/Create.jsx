// import { useDrag, useDrop } from 'react-dnd';
import { motion } from 'framer-motion'
import { useState } from 'react'
import AddInterval from '../../../components/AddInterval'

export default function Create() {
    const [intervals, setIntervals] = useState([])

    function addInterval(form) {
        console.log('adding ', form)
        setIntervals(int => [...int, form])
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
        <h1 className="mb-8 text:xl md:text-3xl text-center text-grwhite w-full">INTERVALS</h1>
        {intervals.length > 0 ? (
            <h2>We have intervals</h2>
        ) : (
            <h2>No intervals :(</h2>
        )}
        </motion.div>
    )
}