import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

const Navbar = ({onNewGame}) => (
  <header>
    <h2>Memory Game</h2>
    <nav>
      <li><button onClick={onNewGame}>New Game</button></li>
    </nav>
  </header>
);

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired
};

export default Navbar;