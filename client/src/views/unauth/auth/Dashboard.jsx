import React, { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import UserContext from '../../../UserContext'
import Card from '../../../components/Card'
import UpdateProfile from '../../../components/UpdateProfile'

export default function Dashboard() {
  
  const { currentUser } = useContext(UserContext)

  const data = [
    {
      id: '01',
      description: 'Test description',
      date: '1/1/2022',
      name: 'Session 4'
    },
    {
      id: '02',
      description: 'Test description 2',
      date: '1/4/2022',
      name: 'Session 5'
    }
  ]
    return (
        <motion.div 
            className="container mx-auto text-3xl md:text-5xl h-screen text-grwhite flex flex-col w-full items-center mt-24"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0, transition: {duration: 0.5}}}    
        >
            {currentUser ? (
                <>
                    <h2 className="mb-4">WELCOME BACK {currentUser.username}</h2>
                    <UpdateProfile user={currentUser}/>
                    <div className="flex flex-col align-center justify-content-center gap-2 flex-wrap">
                        <h4 className="text-xl text-center">YOUR TRAINING SESSIONS</h4>
                        <div className="flex gap-2 flex-wrap">
                            {data.map(d => (
                                <Card name={d.id} key={d.id} description={d.description} date={d.date}/>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <h2>Loading</h2>
            )}
            
        </motion.div>
    )
}