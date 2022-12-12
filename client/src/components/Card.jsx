

export default function Card({id, name, description, date }) {
    return ( 
        <a href={`/play/${id}`} className="block w-48 px-4 py-2 bg-grred rounded-lg shadow-md hover:bg-gray-100 dark:bg-grred dark:hover:bg-gray-700">
            <p className="text-sm text-grgrey dark:text-grgrey text-right">{id}</p>
            <div className=" text-lg tracking-tight text-gray-900 dark:text-white uppercase">SESSION: {name}</div>
            <p className="text-sm text-grgrey dark:text-grgrey">{description}</p>
            <p className="text-sm text-grwhite dark:text-grwhite text-right">{date}</p>
        </a>  
    )
}