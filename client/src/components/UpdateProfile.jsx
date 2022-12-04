import React, { useState, useEffect } from 'react'

export default function UpdateProfile({user}) {
    console.log('user in update ', user)
    const [form, setForm] = useState({
        firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        username: `${user.username}`,
        email: `${user.email}`,
        password: '',
        passwordConfirm: ''
      })
      const [errors, setErrors] = useState([])

      useEffect(() => {
        // Make API call to get current user's information
        // and update the form state with the user's information
      }, [])
    
      const handleChange = (event) => {
        // Update form state with new values
      }
    
      const handleFocus = (event) => {
        // Clear errors for the input field that was focused
      }
    
      const handleSubmit = (event) => {
        // Prevent default form submission
        event.preventDefault()
      }

    return (
        <div className="max-w-sm mx-auto flex flex-col items-center px-2 mt-4">
            <div className="bg-grblack text-lg px-6 py-4 rounded shadow-md text-grgrey w-[1000px]">
                <h4 className="text-xl text-center pb-4">YOUR PROFILE INFORMATION</h4>
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
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="firstName">First Name
                                </label>
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
                                    htmlFor="username">Username
                                </label>
                                <input 
                                    type="text"
                                    className="block border bg-grgrey text-grred border-grred  w-full p-3 rounded mb-4"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    disabled
                                    placeholder="Username" />
                            </div>
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="email">Email
                                </label>
                                <input 
                                    type="text"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="Email" />
                            </div>
                        </div>
                        </div>
                        <div className="flex align-center gap-8">
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="username">Last Name
                                </label>
                                <input 
                                    type="password"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="Password" />
                            </div>
                            <div className="flex flex-col align-start w-full">
                                <label className="block text-grwhite text-left mb-2" 
                                    htmlFor="email">Email
                                </label>
                                <input 
                                    type="text"
                                    className="block border bg-transparent border-grred  w-full p-3 rounded mb-4"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    required
                                    placeholder="Email" />
                            </div>
                        </div>
                        
                    </form>
            </div>
        </div>
    )
}