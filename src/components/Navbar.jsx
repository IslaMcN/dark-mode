import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-dom';
import Page from './../secondaryPage';

const DCH = () => {
  return <h2>Don't Click Here</h2>
}

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Router>
      <Link to="/secondaryPage">Don't Click Here</Link>
      <Route path="/secondaryPage" component={DCH}/>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      </Router>
    </nav>
  );                    
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Navbar />, rootElement);

export default Navbar;
