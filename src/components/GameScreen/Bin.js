import React from 'react';
import { DropTarget } from 'react-drag-drop-container';

const Bin = (DropTarget) => {
    return (
        <DropTarget
            targetKey={DropTarget.targetKey}        
        />
    )
}

export default Bin;