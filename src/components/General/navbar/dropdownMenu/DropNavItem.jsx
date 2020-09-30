import React from 'react';

const DropNavItem = (props) => {
    return(
        <div className = "drop-nav-item">
            {props.dropNavItem}
            <i class="fas fa-angle-right nav-drop-arrow"></i>
        </div>
    )
};

export default DropNavItem;