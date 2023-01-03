/**
 * PARENT COMPONENT : App.jsx (route rendered in AnimatedRoutes)
 * PROPS : none
 * This controls the dashboard view and utilizes both Workouts.jsx and UpdateProfile.jsx
 * 
 * RETURNS => the Dashboard View
 */

import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import UserContext from '../../UserContext';
import Workouts from '../../components/dashboard/Workouts';


export default function Dashboard() {
  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate()
  

    return (
        <motion.div 
            className="container mx-auto text-3xl md:text-5xl text-zinc-300 flex flex-col items-center"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            {currentUser ? (
                <>
                <div className="shadow-grblack shadow-lg py-8 px-4 w-4/5">
                    <h2 className="mb-8 text-center">WELCOME BACK {currentUser.username}</h2>
                    <div className="container mx-auto flex flex-col align-center justify-content-center gap-8">
                        <h4 className="text-4xl text-center">YOUR TRAINING SESSIONS</h4>
                        {currentUser && (
                            <Workouts user={currentUser}/>
                        )}
                        <button onClick={() => navigate("/create")}
                            className="w-1/2 md:w-1/3 self-center text-center text-xl  py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                        >CREATE NEW SESSION</button>
                  </div>
                </div>
                </>
            ) : (
                <h2>Loading</h2>
            )}
            
        </motion.div>
    )
}