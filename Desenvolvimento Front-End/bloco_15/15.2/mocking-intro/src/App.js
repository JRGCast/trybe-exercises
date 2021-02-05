import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Api from './Api';
import Inputs from './Inputs';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Links</h1>
        <BrowserRouter>
          <nav
            style={ 
              { display: 'flex', justifyContent:'space-between', width:'200px'} 
            }
          >
            <Link to='/'>API</Link>
            <Link to='/inputs'>Inputs</Link>
          </nav>
          <Switch>
            <Route exact path='/' component={ Api } />
            <Route exact path='/inputs' component={ Inputs } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;