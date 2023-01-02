/**
 * PARENT COMPONENT : Dashboard.jsx (route rendered in AnimatedRoutes)
 * PROPS : none
 * RETURNS => the Cards (Cards.jsx) which show the workout specs (not workout data though)
 * id, name, date, and description
 */

import { useContext } from 'react';
import { useQuery } from 'react-query';
import UserContext from '../../UserContext';
import Card from './Card';
import Grhiit from '../../Api';

export default function Workouts() {
    const { currentUser } = useContext(UserContext)
    console.log('current user', currentUser)
    async function getWorkouts() {
      const res = await Grhiit.getAllWorkouts(currentUser.id);
      return res
    }

    //quert to grab the individual workout from the DB 
    const { data, status } = useQuery('workout', getWorkouts)
    

    return (
        <>
          {status === "error" && <span className="text-center text-lg">Error fetching data</span>} 
          {status === "loading" && <span className="text-center text-lg">Fetching data...</span>}
          {status === "success" && data.length > 0 ? (
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