import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Signup({ signup }) {
    const INTITAL_STATE = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }
    const [form, setForm] = useState(INTITAL_STATE)
    const [error, setError] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        }))
    }   

    async function handleSubmit(e) {
        e.preventDefault()
        let res = await signup(form)
    }


    return (
        <motion.div 
        className="bg-grey-lighter min-h-screen flex flex-col mt-24"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition: {duration: 0.5}}}        
        >
        
        <h1 className="mb-8 text-8xl text-center text-grwhite w-full">HERE WE GO...</h1> 
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
            <div className="bg-grblack px-6 py-8 rounded shadow-md text-grgrey w-full">
            {error.length ? <div className="text-center text-grred pb-4 text-xl">ERROR</div> : ''}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        autoFocus
                        required
                        placeholder="First Name" />

                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Last Name" />

                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        placeholder="Username" />

                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder="Password" />

                    <input 
                        type="password"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                    >CREATE ACCOUNT</button>
                </form>
                <div className="text-center text-sm text-grgrey mt-4">
                    By signing up, you agree to the<br/> 
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service&nbsp;
                    </a> and&nbsp;&nbsp;
                    <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div className="text-grgrey mt-6">
                Already have an account?&nbsp;&nbsp;
                <a className="no-underline border-b border-blue text-blue" href="/login">
                    Log in
                </a>.
            </div>
        </div>
        
    </motion.div>
    )
}