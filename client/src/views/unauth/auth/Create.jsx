// import { useDrag, useDrop } from 'react-dnd';
import { motion } from 'framer-motion'
import { useState } from 'react'
import AddInterval from '../../../components/AddInterval'
import Interval from '../../../components/Interval';

import {
    DndContext, 
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';
  import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
  
  

export default function Create() {

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }))

    const [intervals, setIntervals] = useState([])

    function addInterval(form) {
        setIntervals(int => [...int, form])
    }

    function deleteInterval(id) {
        console.log('calling D interval', id)
        const newIntervals = intervals.filter(int => int.id != id)
        setIntervals(newIntervals)
    }

    function handleDragEnd(event) {
        const {active, over} = event;
        
        if (active.id !== over.id) {
            setIntervals((int) => {
                const oldIndex = findIndexInState(active.id)
                const newIndex = findIndexInState(over.id)
                return arrayMove(int, oldIndex, newIndex);
            })
        }
    }

    

    function findIndexInState(id) {
        let theIndex = -1
        intervals.forEach((intv, i) => {
            if(intv.id == id) theIndex = i
        })
        return theIndex
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
            <DndContext 
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                
            >
                <SortableContext 
                    items={intervals}
                    strategy={verticalListSortingStrategy}
                >
                {intervals.map((i) => (
                    <Interval 
                        key={i.id} 
                        id={i.id} 
                        movement={i.movement} 
                        abbreviation={i.abbreviation} 
                        work={i.work} 
                        rest={i.rest} 
                        rounds={i.rounds}
                        deleteinterval={deleteInterval}
                         />
                ))} 
                </SortableContext>
            </DndContext> 
        ) 
        : (
            <h2>No intervals yet :(</h2>
        )}
        </motion.div>
    )
}