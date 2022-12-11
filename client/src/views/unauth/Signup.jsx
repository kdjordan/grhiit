import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup({ signup }) {
    const INTITAL_STATE = {
        firstName: 'Kevin',
        lastName: 'Jordan',
        username: 'kdjordan',
        email: 'test@test.com',
        password: 'test123',
        passwordConfirm: 'test123'
    }
    const navigate = useNavigate()
    const [form, setForm] = useState(INTITAL_STATE)
    const [errors, setErrors] = useState([])

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        }))
    }   

    function validateEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }
    
    function checkPasswordForMatch(password, passwordConfirm) {
        return (password == passwordConfirm)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        //check form for entry errors : email
        if (!validateEmail(form.email)) {
            setErrors(e => [...e, 'Invalid email address'])
        }
        else if (!checkPasswordForMatch(form.password, form.passwordConfirm)) {
            setErrors(e => [...e, 'Passwords do not match'])
        } else {
            const newForm = Object.assign({}, form)
            delete newForm.passwordConfirm
            let res = await signup(newForm)
            if(res.success) {
                navigate('/dashboard')
            } else {
                setErrors(result.error)
            }
        }
    }

    function handleFocus() {
        setErrors([])
    }


    return (
        <motion.div 
        className="bg-grey-lighter min-h-screen flex flex-col mt-24"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition: {duration: 0.5}}}        
        >
        
        <h1 className="mb-8 text-6xl md:text-8xl text-center text-grwhite w-full">HERE WE GO...</h1> 
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2">
            <div className="bg-grblack px-6 py-8 rounded shadow-md text-grgrey w-full">
            {/* set up error display */}
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
                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        autoFocus
                        required
                        placeholder="First Name" />

                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        required
                        placeholder="Last Name" />

                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        required
                        placeholder="Username" />

                    <input 
                        type="text"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        required
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        required
                        placeholder="Password" />

                    <input 
                        type="password"
                        className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                        name="passwordConfirm"
                        value={form.passwordConfirm}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        required
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                    >
                        CREATE ACCOUNT
                    </button>
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