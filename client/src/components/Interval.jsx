export default function Interval({id, abbreviation, work, rest, rounds, deleteInterval}) {
    function removeInterval(e) {
        console.log('remove', e.target.id)
        deleteInterval(e.target.id)
    }
    return (
        <>
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2">
                <div className="flex align-center text-2xl">
                    <span className="font-normal text-gray-700 dark:text-gray-400">{abbreviation}&nbsp;:&nbsp;</span>
                    <span className="font-normal text-gray-700 dark:text-gray-400">{rounds}i</span>
                    <span className="font-normal text-gray-700 dark:text-gray-400">&nbsp;@&nbsp;{work}</span>
                    <span className="font-normal text-gray-700 dark:text-gray-400">X{rest}</span>
                    <span id={id} onClick={removeInterval} className="font-normal text-grred cursor-pointer dark:text-grred hover:text-grgrey">&nbsp;&nbsp;&nbsp;&#9447;</span>
                </div>
            </div>
        </>
    )
}