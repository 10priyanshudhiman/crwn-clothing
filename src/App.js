import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = (props) => {
 
  console.log(props);
  return(
  <div>
    <h1> HATS PAGE </h1>
  </div>
  )

}


function App() {
  return(
    <div>
      <Header/>
      <Switch>
      <Route exact path = '/' component = {HomePage}/>
      <Route exact path='/shop' component = {ShopPage}/>
      
      </Switch>
      
      
      
    </div>

  );
  
}

export default App;
