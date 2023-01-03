/**
 * PARENT COMPONENT : App.jsx (route rendered in AnimatedRoutes)
 * PROPS : none
 * This compnent controls the create workout functionality and uses the Modal.jsx and AddInterval.jsx
 * components to handle that
 * It has drag and drop fn to rearrange the order of the intervals until the workout is ready to be saved.
 * It hen launches the Modal to allow the user to add additional information about the workout (Name, Description) 
 */

import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';
import Modal from '../../components/create/Modal';
import AddInterval from '../../components/create/AddInterval';
import { SortableItem } from '../../components/create/SortableItem';
import Grhiit from '../../Api';
import { toast } from 'react-toastify';


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
    const navigate = useNavigate()

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
    }))

    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
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

    async function saveWorkout(obj) {
        try {
            await Grhiit.saveWorkout(currentUser.userId, obj)
            setTimeout(() => {
                toast("Workout Saved !")
                navigate('/dashboard')
            }, 1000)
        } catch (error) {
            console.log('error ', error)
        }
    }

    function handleWorkoutAdd(form) {
        toggleOpen()
        const workoutObj = {
            "workoutName": form.workoutName,
            "workoutDesc": form.workoutDescription,
            "data": items
        }
        saveWorkout(workoutObj)

    }

    return (
        <>  
            <Modal handleWorkoutAdd={handleWorkoutAdd} toggleOpen={toggleOpen} open={isOpen} />
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
                            key={i.id} 
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
                    onClick={toggleOpen}
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