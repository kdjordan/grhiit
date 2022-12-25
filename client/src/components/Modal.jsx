import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function Modal({ handleWorkoutAdd, toggleOpen, open }) {
    const [isOpen, setIsOpen] = useState(open)
    const [form, setForm] = useState({
        workoutName: 'Test',
        workoutDescription: 'Test Description'
    })

    useEffect(() => {
        setIsOpen(op => !op)
    }, [open])

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        }))
    }   

    async function handleSubmit(e) {
        e.preventDefault()
        handleWorkoutAdd(form)
        setIsOpen(false)
    }

    return (
        <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full flex flex-col justify-center items-center content-center fixed top-0 left-0 backdrop-blur-md"
            >
            <div className="shadow-black shadow-xl px-6 py-4 rounded text-grgrey w-1/3 bg-grblack">
                <h2 className="text-center mb-4 text-2xl">SAVE WORKOUT</h2>
                <form onSubmit={handleSubmit} className="autocomplete-off">
                    <label className="block text-grwhite text-left mb-2 text-bae" 
                        htmlFor="workoutName">Workout Name
                    </label>
                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4 tracking-wider"
                        name="workoutName"
                        value={form.workoutName}
                        onChange={handleChange}
                        autoFocus
                        required
                        placeholder="Workout Name" />

                    <label className="block text-grwhite text-left mb-2 text-bae" 
                        htmlFor="workoutDescription">Workout Description
                    </label>
                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4 tracking-wider"
                        name="workoutDescription"
                        value={form.workoutDescription}
                        onChange={handleChange}
                        required
                        placeholder="Description" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                    >
                        SAVE WORKOUT
                    </button>
                    <button
                        type="submit"
                        onClick={toggleOpen}
                        className="w-full text-center py-3 rounded border border-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                    >
                        CANCEL SAVE
                    </button>
                </form>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
    )
}