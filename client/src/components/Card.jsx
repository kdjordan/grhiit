//this component renders are workout cards
//formats the date string into readable form first :)

export default function Card({id, name, description, date }) {
    const formattedDate = Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date)
    return ( 
        <a href={`/play/${id}`} className="block w-48 max-w-xl px-4 py-2 bg-grred rounded-lg shadow-md hover:bg-gray-100 dark:bg-grred dark:hover:bg-gray-700">
            <p className="text-sm text-grgrey dark:text-grgrey text-right">0{id}</p>
            <div className=" text-lg tracking-tight text-gray-900 dark:text-white uppercase">WORKOUT: {name}</div>
            <p className="text-sm text-grgrey dark:text-grgrey">{description}</p>
            <p className="text-sm text-grwhite dark:text-grwhite text-right">{formattedDate}</p>
        </a>  
    )
}