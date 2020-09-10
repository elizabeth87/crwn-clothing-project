import React from 'react';

import './HomePage.styles.scss';
import Directory from '../component/directory/Directory';
//functional component because we dont need lifecycle methods nor 
//do we need to store a state

const HomePage = () => (
    <div className='homepage'>
       <Directory />
    </div>
)

export default HomePage;