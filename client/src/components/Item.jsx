import { forwardRef } from "react";

export const Item = forwardRef((props, ref) => {
  const {remove, ...rest } = props
  return (
    <div {...rest} ref={ref} className="max-w-sm  p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2">
      <div onDoubleClick={() => {remove(props.id)}}  className="flex align-center text-2xl">
          <span className="font-normal text-gray-700 dark:text-gray-400">{props.abbreviation}&nbsp;:&nbsp;</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">{props.rounds}i</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">&nbsp;@&nbsp;{props.work}</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">X{props.rest}</span>
      </div>
    </div>
  )
});
