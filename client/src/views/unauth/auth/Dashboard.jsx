import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import UserContext from '../../../UserContext'
import Card from '../../../components/Card'
import UpdateProfile from '../../../components/UpdateProfile'

export default function Dashboard() {
  
  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate()


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
    },
    {
      id: '03',
      description: 'Test description 2',
      date: '1/4/2022',
      name: 'Session 5'
    },
    {
      id: '04',
      description: 'Test description 2',
      date: '1/4/2022',
      name: 'Session 5'
    },
    {
      id: '05',
      description: 'Test description 2',
      date: '1/4/2022',
      name: 'Session 5'
    },
  ]

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
                    <h2 className="mb-16 text-center">WELCOME BACK {currentUser.username}</h2>
                    <div className="container mx-auto flex flex-col align-center justify-content-center gap-8">
                        <h4 className="text-4xl text-center">YOUR TRAINING SESSIONS</h4>
                        <div className="flex gap-2 flex-wrap align-center justify-center">
                            {data.map(d => (
                                <Card 
                                  name={d.id} 
                                  id={d.id} 
                                  key={d.id} 
                                  description={d.description} 
                                  date={d.date}
                                  />
                            ))}
                        </div>
                        <button onClick={() => navigate("/create")}
                            className="w-1/2 md:w-1/3 self-center text-center text-xl  py-3 rounded bg-grred text-grwhite hover:bg-grwhite hover:text-grred duration-300 focus:outline-none my-1"
                        >CREATE NEW SESSION</button>
                  </div>
                    </div>
                    <UpdateProfile user={currentUser} />
                </>
            ) : (
                <h2>Loading</h2>
            )}
            
        </motion.div>
    )
}