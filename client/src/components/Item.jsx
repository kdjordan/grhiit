import { forwardRef } from "react";

export const Item = forwardRef((props, ref) => {
  return (
    <div {...props} ref={ref} className="max-w-sm  p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2">
      <div className="flex align-center text-2xl">
          <span className="font-normal text-gray-700 dark:text-gray-400">{props.abbreviation}&nbsp;:&nbsp;</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">{props.rounds}i</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">&nbsp;@&nbsp;{props.work}</span>
          <span className="font-normal text-gray-700 dark:text-gray-400">X{props.rest}</span>
          <span onDoubleClick={() => {
            console.log('clicked', props.id)
            props.remove(props.id)}} className="font-normal z-99 text-grred cursor-pointer dark:text-grred hover:text-grgrey">&nbsp;&nbsp;&nbsp;&#9447;
        </span>
      </div>
      {/* {props.onRemove ? (
        <button
          onClick={() => {
            console.log(`Removing: ${props.id}`);
            props.onRemove(props.id);
          }}
        >
          Remove
        </button>
      ) : null} */}
    </div>
  )
});
