/**
 * PARENT VIEW => Create.jsx
 * FUNCTION - contains form for adding an interval
 * PROPS  - addInterval is a fn that when fired saves the interval data in the parent state
 * RENDERS - form for adding an individaul interval's information : name, abbreviation, work, rest, rounds
 */

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddInterval({ addInterval }) {
    const INITIAL_STATE ={
        movementName: '',
        movementAbbrv: '',
        work: '',
        rest: '',
        rounds: '',
        type: ''
    }
    const [form, setForm] = useState(INITIAL_STATE)

    const [errors, setErrors] = useState([])

    function handleChange(e) {
        const { name, value } = e.target

        setForm(f => ({
            ...f,
            [name]: value
        })) 
      }

      async function handleSubmit(e) {
        // Prevent default form submission
        e.preventDefault()
        //make sure from(interval) is ready for DB
        const formattedForm = formatForm()
        //reset form data to blanks
        setForm(INITIAL_STATE)
        //send interval thorugh prop function to parent's state to store
        addInterval(formattedForm)
      }

      function formatForm() {
        //add a type based on movement type for Play function
        if (form.movementName.toLowerCase() === 'rest') {
            form.type = 'rest'
        } else {
            form.type = 'regular'
        }

        //convert string inputs for work, rest, and rounds into integers
        form.work = Number(form.work)
        form.rest = Number(form.rest)
        form.rounds = Number(form.rounds)
        
        //add unique id to object
        const newForm = Object.assign({}, form)
        newForm.id = uuidv4()
        return newForm
      }

      function handleFocus() {
        // Clear errors for the input field that was focused
        setErrors([])
      }

    return (
        <div className="flex flex-col px-2 mt-4 mb-8 w-full lg:w-2/3">
        <div className="text-lg px-6 py-4 rounded text-grgrey shadow-black shadow-xl">
            <h4 className="text-2xl text-grwhite text-center pb-4">ADD AN INTERVAL</h4>
            {errors.length ? 
                <div className="text-center text-grgrey pb-4 text-xl">
                    <ul>
                        {errors.map((e, index) => {
                            return <li key={index}>{e}</li>
                        })}

                    </ul>
                </div> 
                : ''}
                <form onSubmit={handleSubmit}>
                    <div className="flex align-center gap-8">
                        <div className="flex flex-col align-start w-full">
                            <label className="block text-grgrey text-left mb-2 text-bae" 
                                htmlFor="firstName">MOVEMENT NAME
                            </label>
                            <input 
                                type="text"
                                className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                name="movementName"
                                value={form.movementName}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                                placeholder="Movement" />
                        </div>
                        <div className="flex flex-col align-start w-full">
                            <label className="block text-grgrey text-left mb-2" 
                                htmlFor="lastName">ABBREVIATION
                            </label>
                            <input 
                                type="text"
                                className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                name="movementAbbrv"
                                value={form.movementAbbrv}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
                                maxLength={8}
                                placeholder="MAX 8 Letters" />
                        </div>
                    </div>
                    <div className="flex align-center gap-8">
                        <div className="flex flex-col align-start w-full">
                            <label className="block text-grgrey text-left mb-2" 
                                htmlFor="password">Work
                            </label>
                            <input 
                                type="number"
                                className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                name="work"
                                value={form.work}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                min={0}
                                placeholder="Seconds" />
                        </div>
                        <div className="flex flex-col align-start w-full">
                            <label className="block text-grgrey text-left mb-2" 
                                htmlFor="rest">Rest
                            </label>
                            <input 
                                type="number"
                                className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                name="rest"
                                value={form.rest}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                min={1}
                                required
                                placeholder="Seconds" />
                        </div>
                        <div className="flex flex-col align-start w-full">
                            <label className="block text-grgrey text-left mb-2" 
                                htmlFor="rounds">Rounds
                            </label>
                            <input 
                                type="number"
                                className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                name="rounds"
                                value={form.rounds}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                min={1}
                                required
                                placeholder="Rounds" />
                        </div>
                    </div>
                    <div className="flex align-center">
                        <button
                            type="submit"
                            className="w-1/3 mx-auto self-center text-center text-base sm:text-sm py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                        >ADD INTERVAL</button>
                    </div> 
                </form>
        </div>
    </div>
    )
}