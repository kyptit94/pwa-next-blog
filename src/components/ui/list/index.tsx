import { ListInterface } from "./list.interface"
export default function List({ children, col, gap } : ListInterface) {
    return (
    <div className={`grid grid-cols-${col} gap-${gap}`}>
        {children}
    </div>)
}