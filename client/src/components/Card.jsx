

export default function Card({id, name, description, date }) {
    return (
        <a href="#" class="block max-w-sm  p-6 bg-grred rounded-lg shadow-md hover:bg-gray-100 dark:bg-grred dark:hover:bg-gray-700">
            <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white uppercase">SESSION: {name}</h5>
            <p class="text-sm text-grgrey dark:text-grgrey">{description}</p>
            <p class="text-sm text-grwhite dark:text-grwhite">{date}</p>
        </a>
    )
}