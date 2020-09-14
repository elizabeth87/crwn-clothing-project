import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ShopPage from './component/shop/Shop';

function App() {
  return (
    <div>
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
