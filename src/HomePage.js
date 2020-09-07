import React from 'react';
import './HomePage.styles.scss'
//functional component because we dont need lifecycle methods nor 
//do we need to store a state

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>    
              <div className='content'>
                <h1 className='title'>HATS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </div>
            </div>
            <div className='menu-item'>    
              <div className='content'>
                <h1 className='title'>HATS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </div>
            </div>
            <div className='menu-item'>    
              <div className='content'>
                <h1 className='title'>JACKETS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </div>
            </div>
            <div className='menu-item'>    
              <div className='content'>
                <h1 className='title'>WOMANS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </div>
            </div>
            <div className='menu-item'>    
              <div className='content'>
                <h1 className='title'>MENS</h1>
                <span className='subtitle'>SHOP NOW</span>
              </div>
            </div>
    </div>
    </div>
)

export default HomePage;