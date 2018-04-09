import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './index.css';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Home from './containers/home'
import Checklist from './containers/checklist'
import Parking from './containers/parking'
import Shopping from './containers/shopping'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="ph2" to="/">Bike Paps</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="#">
              <Link className="ph2" to="/">Home</Link>
            </NavItem>
            <NavItem href="#">
              <Link className="ph2" to="/checklist">Checklist</Link>
            </NavItem>
            <NavItem href="#">
              <Link className="ph2" to="/parking">Parking</Link>
            </NavItem>
            <NavItem href="#">
              <Link className="ph2" to="/shopping">Shopping</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/checklist" component={Checklist} />
        <Route exact path="/parking" component={Parking} />
        <Route exact path="/shopping" component={Shopping} />
      </div>
    );
  }
}

export default App;
