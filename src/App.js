import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InputName from './pages/InputName'
import Cookie from './pages/Cookie'
import Food from './pages/Food'
import Animal from './pages/Animal'
import TheTreta from './pages/TheTreta'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/name'>Input Name</Link>
      </nav>
        <Switch>
          <Route path='/name' component={InputName}/>
          <Route path='/cookie/:name' component={(props) => <Cookie {...props} />}/>
          <Route path='/food/:name/:cookieChoice' component={(props) => <Food {...props} />}/>
          <Route path='/animal/:name/:cookieChoice/:foodChoice' component={(props) => <Animal {...props} />}/>
          <Route path='/treta/:name/:cookieChoice/:foodChoice/:animalChoice' component={(props) => <TheTreta {...props} />}/>
          <Route exact path='/' component={LandingPage}/>
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
