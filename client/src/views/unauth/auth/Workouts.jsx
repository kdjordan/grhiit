import { useContext } from 'react';
import { useQuery } from 'react-query';
import UserContext from '../../../UserContext';
import Card from '../../../components/Card';
import Grhiit from '../../../Api';

export default function Workouts() {
    const { currentUser } = useContext(UserContext)

    async function getWorkouts() {
      const res = await Grhiit.getAllWorkouts(currentUser.id);
      return res
    }

    const { data, status } = useQuery('workouts', getWorkouts)
    
    return (
        <>
          {status === "error" && <p>Error fetching data</p>}
          {status === "loading" && <p>Fetching data...</p>}
          {status === "success" && (
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
          )}
        </>
    )
          
}