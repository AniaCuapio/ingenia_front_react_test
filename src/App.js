import React from 'react';

//Routes
import Routes from './Routes';
import { BrowserRouter as Router,   NavLink } from 'react-router-dom'
import { Navbar,  NavbarBrand, Nav, NavItem } from 'reactstrap';
import styles from './App.module.scss'

function App() {
  return (
    <Router>
         <div className={styles.stickyNav}>
        <Navbar  expand="md">
          <div>
          <NavbarBrand href="/">
            <NavLink exact activeClassName="active" to="/">
            <img alt="ingenia logo" className={styles.logo} src="/logo_ingenia.png" />
            </NavLink>
          </NavbarBrand>
          </div>
          <div>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink activeClassName={styles.active} to="/about-us">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={styles.active} to="/our-work">Our Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName={styles.active} to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem  >
                <NavLink activeClassName={styles.active} to="/manifesto">Manifesto</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        </div>
      <Routes />
        </Router>
  );
}

export default App;
//        <Routes />
