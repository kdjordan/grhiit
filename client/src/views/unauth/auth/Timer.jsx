import { motion } from 'framer-motion'
export default function Timer ({ duration, activity, rounds }) {

  return (
    <div className='flex flex-col items-center'>
      <div className="mb-16">
        ROUNDS : {rounds}
      </div>
      <div>
        {activity}
      </div>
      <div className='text-8xl'>
        {duration}
      </div>
    </div>
  );
}
