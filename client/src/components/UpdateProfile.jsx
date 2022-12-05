import React, { useState, useEffect } from 'react'

export default function UpdateProfile({ user }) {
    const [form, setForm] = useState({
        firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        username: `${user.username}`,
        email: `${user.email}`,
        password: '',
        confirmPassword: ''
      })
      const [errors, setErrors] = useState([])

      useEffect(() => {
        // Make API call to get current user's information
        // and update the form state with the user's information
      }, [])
    
      function handleChange(e) {
        console.log(e.target)
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        })) 
      }
    
      const handleFocus = (event) => {
        // Clear errors for the input field that was focused
        setErrors([])
      }
    
      async function handleSubmit(e) {
        // Prevent default form submission
        e.preventDefault()
        // Make sure email is valid format and passwords match
        if (validateEmail(form.email) && checkPasswordForMatch(form.password, form.confirmPassword)) {
            let res = await signup(form)
        }
        //check form for entry errors : email
        if (!validateEmail(form.email)) {
            console.log('setting email error', errors)
            setErrors(e => [...e, 'Invalid email address'])
        }
        if (!checkPasswordForMatch(form.password, form.confirmPassword)) {
            console.log('setting password error', errors)
            setErrors(e => [...e, 'Passwords do not match'])
        }
      }

      function validateEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }
    
    function checkPasswordForMatch(password, passwordConfirm) {
        console.log('checkingpw ', password == passwordConfirm)
        return (password == passwordConfirm)

    }

    return (
        <div className="flex flex-col px-2 mt-4 mb-8 w-full lg:w-2/3">
            <div className="bg-grblack text-lg px-6 py-4 rounded shadow-md text-grgrey">
                <h4 className="text-2xl text-center pb-4">YOUR PROFILE INFORMATION</h4>
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
                                <label className="block text-grwhite text-left mb-2 text-bae" 
                                    htmlFor="firstName">First Name
                                </label>
                                <input 
                                    type="text"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="First Name" />
                            </div>
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="lastName">Last Name
                                </label>
                                <input 
                                    type="text"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="flex align-center gap-8">
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="password">Username
                                </label>
                                <input 
                                    type="text"
                                    className="block border bg-grred text-grgrey border-grred  w-full p-3 rounded mb-4"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    disabled
                                    placeholder="Username" />
                            </div>
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="lastName">Email
                                </label>
                                <input 
                                    type="email"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="email" />
                            </div>
                        </div>
                        <div className="flex align-center gap-8">
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="password">New Password
                                </label>
                                <input 
                                    type="password"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="New Password" />
                            </div>
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="confirmPassword">Confirm Password
                                </label>
                                <input 
                                    type="password"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="Confirm New Password" />
                            </div>
                        </div>
                        <div className="flex align-center">
                            <button
                                type="submit"
                                className="w-1/3 mx-auto self-center text-center text-base sm:text-sm py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                            >UPDATE PROFILE</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}