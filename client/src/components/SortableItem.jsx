import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { Item } from './Item';

export const SortableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id:props.id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div className="flex align-center">
        <Item ref={setNodeRef} style={style} {...attributes} {...listeners} {...props}/>
        </div>
    )
}

export default SortableItem