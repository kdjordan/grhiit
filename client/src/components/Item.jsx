import { forwardRef } from "react";
import { useState } from "react";

export const Item = forwardRef((props, ref) => {
  
  const {remove, ...rest } = props
  const [restInterval] = useState(rest.work==='0'?true:false)
  
  const restClasses = "dark:bg-green-600"
  const regularClasses = "bg-grred border-gray-700"
  console.log(props)
  return (
    <div {...rest} ref={ref} 
      className={`${restInterval? restClasses: regularClasses} 
        text-grgrey rounded-lg shadow-md hover:bg-gray-700 mb-2 max-w-sm p-4`}
      >
      
      <div onDoubleClick={() => {remove(rest.id)}}  className="flex align-center text-2xl">
        {restInterval? (
          <>
            <span>REST&nbsp;:&nbsp;</span>    
            <span>{rest.rest} seconds</span>
          </>
        ) : (
          <>
            <span>{rest.abbreviation}&nbsp;:&nbsp;</span>
            <span>{rest.rounds}i</span>
            <span>&nbsp;@&nbsp;{rest.work}</span>
            <span>X{rest.rest}</span>
          </>
        )}
      </div>
    </div>
  )
});
