import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '@ajusa/lit/dist/lit.css';
import '@ajusa/lit/dist/util.css';
import './index.css';
import './App.css';
import Home from './containers/home'
import Checklist from './containers/checklist'
import Parking from './containers/parking'
import Shopping from './containers/shopping'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="c row">
            <Link className="ph2" to="/">Home</Link>
            <Link className="ph2" to="/checklist">Checklist</Link>
            <Link className="ph2" to="/parking">Parking</Link>
            <Link className="ph2" to="/shopping">Shopping</Link>
          </div>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/checklist" component={Checklist} />
        <Route exact path="/parking" component={Parking} />
        <Route exact path="/shopping" component={Shopping} />
      </div>
    );
  }
}

export default App;
