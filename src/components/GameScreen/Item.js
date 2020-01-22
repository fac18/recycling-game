import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

const Item = (DragDropContainer)  => {
    render () {
    return (
        <DragDropContainer
            targetKey={DragDropContainer.targetKey}
        />
    );
}
}

export default Item;