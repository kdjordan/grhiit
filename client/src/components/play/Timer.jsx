/**
 * PARENT COMPONENT : PlayDisplay.jsx 
 * PROPS : 
 * type for controlling background color, 
 * rounds for displaying rounds left,
 * prompt which instructs user what movement is current, 
 * and duration which is the time remaining
 * 
 * RETURNS => the countdown clock and instructions
 * NOTE : some types have different visiblities and that is filterd in this component
 */

export default function Timer ({ duration, prompt, rounds, type }) {
  return (
    <div className='flex flex-col items-center'>
      {type==='show'? (
        <>
          <div className="mb-16">
            ROUNDS : {rounds}
          </div>
          <div>
            {prompt}
          </div>
        </>
      ) : ('')
      
      }
      <div className='text-8xl'>
        {duration}
      </div>
    </div>
  );
}
