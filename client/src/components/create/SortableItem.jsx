/** *
 * PARENT COMPONENT : Create.jsx (routed rendered in AnimatedRoutes)
 * PROPS : all information about an interval that has been added and is 
 * being tracked in the "items" state in parent Create.jsx
 * 
 * RETURNS => an individual item that is DND ready
*/

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