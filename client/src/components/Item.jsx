import { forwardRef } from "react";

export const Item = forwardRef((props, ref) => {
  const {remove, ...rest } = props
  console.log(rest.work == 0)
  return (
    <div {...rest} ref={ref} 
      className={`bg-gray-800 border-gray-700 hover:bg-gray-700 ${rest.work == 0 ? 'dark:bg-green-600' : ''} max-w-sm  p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 mb-2
        `}>
      <div onDoubleClick={() => {remove(rest.id)}}  className="flex align-center text-2xl">
          <span className="font-normal text-gray-700 dark:text-gray-400">{rest.abbreviation}&nbsp;:&nbsp;</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">{rest.rounds}i</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">&nbsp;@&nbsp;{rest.work}</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">X{rest.rest}</span>
      </div>
    </div>
  )
});
