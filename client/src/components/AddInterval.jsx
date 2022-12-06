import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddInterval({ addInterval }) {
    const [form, setForm] = useState({
        movement: 'Burpee',
        abbreviation: 'BRP',
        work: 20,
        rest: 10,
        rounds: 5
    })
    const [errors, setErrors] = useState([])

    function handleChange(e) {
        console.log(e.target)
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        })) 
      }

      async function handleSubmit(e) {
        // Prevent default form submission
        e.preventDefault()
        const newForm = Object.assign({}, form)
        //add unique id to object
        newForm.id = uuidv4()
        addInterval(newForm)
      }

      const handleFocus = (event) => {
        // Clear errors for the input field that was focused
        setErrors([])
      }

      const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    return (
        <div className="flex flex-col px-2 mt-4 mb-8 w-full lg:w-2/3">
        <div className="bg-grblack text-lg px-6 py-4 rounded shadow-md text-grgrey">
            <h4 className="text-2xl text-grwhite text-center pb-4">ADD AN INTERVAL</h4>
            {errors.length ? 
                <div className="text-center text-grred pb-4 text-xl">
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
                                name="movement"
                                value={form.movement}
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
                                name="abbreviation"
                                value={form.abbreviation}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                required
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
                                onKeyPress={preventMinus}
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
                                onKeyPress={preventMinus}
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
                                onKeyPress={preventMinus}
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