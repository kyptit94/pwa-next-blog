export default function Expert({ expert }: { expert: string }) {
    return (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {expert}
        </p>
    )
}