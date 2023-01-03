/**
 * PARENT COMPONENT : Dashboard.jsx (route rendered in AnimatedRoutes)
 * PROPS : none
 * RETURNS => the Cards (Cards.jsx) which show the workout specs (not workout data though)
 * id, name, date, and description
 */

import { useState, useEffect } from 'react';
import Card from './Card';
import Grhiit from '../../Api';

export default function Workouts({user}) {
    const [data, setData] = useState([])
  
    useEffect(() => { 
      async function getWorkouts() {
        const res = await Grhiit.getAllWorkouts(user.userId);
        setData(res)
      }
        getWorkouts()
    }, [user])  
    
    return (
        <>
         
          {data && data.length > 0  ? (
            <div className="flex gap-2 flex-wrap align-center justify-center">
              {data.map((d) => (
                <Card 
                name={d.id} 
                id={d.id} 
                key={d.id} 
                description={d.description} 
                date={d.date}
                />
              ))}
            </div>
          ) : 
          (<h3 className="w-1/3 mx-auto text-center bg-grblack text-xl py-2 border">No Workouts yet !</h3>)
        
        }
        </>
    )   
}