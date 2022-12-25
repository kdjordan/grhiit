import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import Modal from '../../../components/Modal'
import AddInterval from '../../../components/AddInterval'
import { SortableItem } from '../../../components/SortableItem'
import UserContext from '../../../UserContext'
import Grhiit from '../../../Api'

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
    verticalListSortingStrategy
  } from '@dnd-kit/sortable';
  
  

export default function Create() {
    const { currentUser } = useContext(UserContext)
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }))

    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(true)

    function toggleOpen() {
        console.log('toggling open')
        setIsOpen((op) => !op)
    }
    
    function addInterval(form) {
        setItems(int => [...int, form])
    }

    function deleteInterval(id) {
        const newItems = items.filter(int => int.id != id)
        setItems(newItems)
    }

    function handleDragEnd(event) {
        const {active, over} = event;
        
        if (active.id !== over.id) {
            setItems((int) => {
                const oldIndex = findIndexInState(active.id)
                const newIndex = findIndexInState(over.id)
                return arrayMove(int, oldIndex, newIndex);
            })
        }
    }

    function findIndexInState(id) {
        let theIndex = -1
        items.forEach((intv, i) => {
            if(intv.id == id) theIndex = i
        })
        return theIndex
    }

    async function saveWorkout() {
        toggleOpen()
        // try {
        //     const res = await Grhiit.saveWorkout(currentUser.id, items)
        //    console.log('received ', res)
        // } catch (error) {
        //     console.log('error ', error)
            
        // }
    }

    function handleWorkoutAdd(form) {
        console.log('got form ', form)

    }

    return (
        <> 
            {/* <Modal handleWorkoutAdd={handleWorkoutAdd} toggleOpen={toggleOpen} open={isOpen} />  */}
            <motion.div 
            className="container mx-auto text-3xl md:text-5xl  text-grwhite flex flex-col items-center"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}        
            >
            <h1 className="mb-8 text-center text-grwhite w-full">TRAINING SESSION BUILDER</h1> 
            <AddInterval addInterval={addInterval}/>

            <h2 className="text:xl md:text-3xl text-center text-grwhite w-full">INTERVALS</h2>
            <h3 className="text-base md:text-xl text-center text-grwhite w-full">click/drag to reorder</h3>
            <h3 className="mb-8 text-base md:text-xl text-center text-grwhite w-full">double click to delete</h3>

            {items.length > 0 ? (
                <>
                <DndContext 
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    
                >
                    <SortableContext 
                        items={items}
                        strategy={verticalListSortingStrategy}
                    >
                    {items.map((i, index) => (
                        <SortableItem 
                            key={i.sortId} 
                            id={i.id} 
                            index={index}
                            movement={i.movementName} 
                            abbreviation={i.movementAbbrv} 
                            work={i.work} 
                            rest={i.rest} 
                            rounds={i.rounds}
                            remove={deleteInterval}
                            />
                    ))} 
                    </SortableContext>
                </DndContext> 
                <button
                    onClick={saveWorkout}
                    className="w-1/6 text-base md:text-base text-center py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                >
                    SAVE SESSION
                </button>
            </>
            ) 
            : (
                <h2 className="text-2xl border border-grred p-3 uppercase text-center text-grwhite rounded">No intervals yet :(</h2>
            )}
            </motion.div>
        </>
    )
}