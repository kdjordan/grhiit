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
