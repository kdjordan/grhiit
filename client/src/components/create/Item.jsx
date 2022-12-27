/**
 * component to render the intervals based on AddInterval 
 * contorls the color of the interval :
 * reset intervals are green / work intervals are red
 * PROPS => ref for controlling DND
 * props are spread to break out the remove FN which deletes the display and interval on double click
 * NOTE - couldn't use single click becuase that's the listener for rearranging in DND
 */
import { forwardRef } from "react";
import { useState } from "react";

export const Item = forwardRef((props, ref) => {
  
  const {remove, ...rest } = props
  const [restInterval] = useState(rest.work ===0 ? true:false)
  
  const restClasses = "dark:bg-green-600"
  const regularClasses = "bg-grred border-gray-700"
  
  return (
    <div {...rest} ref={ref} 
      className={`${restInterval? restClasses: regularClasses} 
        text-grgrey rounded-lg shadow-md hover:bg-gray-700 mb-2 max-w-sm p-4`}
      >
      
      <div onDoubleClick={() => {remove(rest.id)}}  className="flex text-2xl">
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
