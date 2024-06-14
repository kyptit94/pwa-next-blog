import { ListInterface } from "./list.interface"
export default function List({ children, col, gap } : ListInterface) {

    // Define a mapping of col values to Tailwind classes
    const colClasses: { [key: number]: string } = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        // Add more mappings as needed
    };

    // Define a mapping of gap values to Tailwind classes
    const gapClasses : { [key: number]: string } = {
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        7: 'gap-7',
        8: 'gap-8'
        // Add more mappings as needed
    };

    // Use the mappings to select the appropriate class
    const colClass = colClasses[col] || 'grid-cols-1'; // Default to 'grid-cols-1' if no match
    const gapClass = gapClasses[gap] || 'gap-1'; // Default to 'gap-1' if no match

    return (
    <div className={`grid ${colClass} ${gapClass}`}>
        {children}
    </div>)
}