export default function Title({ title }: { title: string }) {
    return (<a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    </a>)
}