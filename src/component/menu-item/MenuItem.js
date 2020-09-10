import React from 'react';

import '../menu-item/menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    //react gives every html element a property called style. 
    //where we can add value
    <div 
    className={`${size} menu-item`}
>
 <div 
     className='background-image' 
     style={{
        backgroundImage: `url(${imageUrl})`
    }}
    />  
    <div className='content'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
        </div> 
)

export default MenuItem;