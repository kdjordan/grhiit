/** *
 * PARENT COMPONENT : Create.jsx
 * PROPS : user
 * the information in the user object prop is useed to populate all form fields
 * passwords are intentionally left out
 * 
 * RETURNS -> form that handles all user interaction to update user profile
*/

import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import UserContext from '../../UserContext';
import Grhiit from '../../Api';
import LocalStorage from '../../LocalStorage';
import { toast } from 'react-toastify';

export default function Profile() {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const [user, setUser] = useState()
    const [form, setForm] = useState(null);

    useEffect(() => {
        let user
        if (currentUser) {
            LocalStorage.setLocalProfile(currentUser)
            user = LocalStorage.getLocalProfile()
            setUser(user)
        }
    
        if (!currentUser) {
            user = LocalStorage.getLocalProfile()
            setUser(user)
        }
        
        setForm({
            firstName: user ? user.firstName : '',
            lastName: user ? user.lastName : '',
            username: user ? user.username : '',
            email: user ? user.email : '',
            password: '',
            confirmPassword: ''
        })
    }, [])

    const [errors, setErrors] = useState([])

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({
            ...f,
            [name]: value
        })) 
    }

    async function deleteProfile() {
        console.log('deleting ', user.userId)
        let res = await Grhiit.deleteUser(user.userId)
        if (res) {
            navigate('/')
        }
    }

    function handleFocus() {
    // Clear errors for the input field that was focused
    setErrors([])
    }

    async function handleSubmit(e) {
        console.log(e.target)
    // Prevent default form submission
    e.preventDefault()
    // Make sure email is valid format and passwords match
    if (validateEmail(form.email) && checkPasswordForMatch(form.password, form.confirmPassword)) {
        try {
            const newForm = Object.assign({}, form)
            if (form.password.length === 0) {
                delete newForm.password
            }
            delete newForm.confirmPassword
            let user = await Grhiit.patchUser(form.username, newForm)
            toast("Profile Updated")
            setCurrentUser(user)
        } catch(err) {
            setErrors(e => [...e, err])
        }
    }

        //check form for entry errors : email
        if (!validateEmail(form.email)) {
            setErrors(e => [...e, 'Invalid email address'])
        }
        //check form for passwords not matching
        if (!checkPasswordForMatch(form.password, form.confirmPassword)) {
            setErrors(e => [...e, 'Passwords do not match'])
        }
      }

      function validateEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }
    
    function checkPasswordForMatch(password, passwordConfirm) {
        return (password == passwordConfirm)
    }

    return (
        <>
        <motion.div
            className="container mx-auto text-3xl md:text-5xl  text-grwhite flex flex-col items-center"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}        
            >
        {user ? (
             <div className="px-2 content-center mt-4 w-full lg:w-4/5 ">
             <div className="flex flex-col content-center text-lg 
                     px-6 py-4 rounded text-grgrey shadow-black shadow-xl"
             >
                 <h4 className="text-2xl text-center pb-4">
                     YOUR PROFILE INFORMATION
                 </h4>
                 {errors.length ? 
                     <div className="w-1/4 mx-auto text-center text-zinc-300 
                         border py-2 border-zinc-300 bg-grblack mb-4 text-xl"
                     >
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
                                     htmlFor="username">Username
                                 </label>
                                 <input 
                                     type="text"
                                     className="block border bg-grred text-grgrey border-grred  w-full p-3 rounded mb-4"
                                     name="username"
                                     value={form.username}
                                     disabled />
                             </div>
                             <div className="flex flex-col align-start w-full">
                                 <label className="block text-grwhite text-left mb-2" 
                                     htmlFor="email">Email
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
                                     placeholder="Confirm New Password" />
                             </div>
                         </div>
                         <div className="flex align-center justify-center">
                             <button
                                 type="submit"
                                 className="w-1/3 mx-auto self-center text-center text-base 
                                     sm:text-sm py-3 rounded bg-grred text-grwhite hover:bg-grwhite 
                                     hover:text-grred duration-300 focus:outline-none my-1"
                             >
                                 UPDATE PROFILE
                             </button>
                             <button
                                type="button"
                                onClick={deleteProfile}
                                id="delete"
                                className="w-1/3 mx-auto self-center text-center text-base 
                                    sm:text-sm py-3 rounded bg-grblack text-grred hover:bg-grwhite 
                                hover:text-grred duration-300 focus:outline-none my-1"
                            >
                                 DELETE PROFILE
                             </button>
                         </div>
                     </form>
             </div>
         </div>    
        ) : (
            <h2>Loading</h2>
        )}
       
        </motion.div> 
    </>
    )
}