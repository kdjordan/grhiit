import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Login({ login }) {
    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const [form, setForm] = useState(INITIAL_STATE)
    const [error, setError] = useState(false)

    function handleChange(e) {
        console.log(form)
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        }))
    }   

    async function handleSubmit(e) {
        e.preventDefault()
        let res = await login(form)
        console.log('got login ', res)
        if (res.success) {
            console.log('push to profile')
        } else {
            setError(res.error)
        }
    }

    function handleFocus() {
        setError(false)
    }

    return (
        <motion.div 
        className="bg-grey-lighter min-h-screen flex flex-col mt-24"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition: {duration: 0.5}}}        
        >
        
        <h1 className="mb-8 text-6xl md:text-8xl text-center text-grwhite ">LET'S GO...</h1>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
            <div className="bg-grblack px-6 py-8 rounded shadow-md text-grgrey w-full">
            {/* set up error display */}
            {error.length ? 
                <div className="text-center text-grred pb-4 text-xl">{error}</div> 
                : ''}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        autoFocus
                        required
                        placeholder="Username" />

                    <input 
                        type="password"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        autoFocus
                        required
                        placeholder="Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                    >LET'S GO</button>
                </form>
            </div>
            <div className="text-grgrey mt-6">
                Don't have an account?&nbsp;&nbsp;
                <a className="no-underline border-b border-blue text-blue" href="/signup">
                    Sign Up
                </a>.
            </div>
        </div>
        
    </motion.div>
    )
}