import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
          <h1> Header</h1>
          <ul>
              <li>
                  <NavLink exact  to="/">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/about">Bubblegum</NavLink>
              </li>
              <li>
                  <NavLink to="/tab/tab1">/tab/tab1</NavLink>
              </li>
              <li>
                  <NavLink to="/tab/tab2">/tab/tab2</NavLink>
              </li>
              <li>
                  <NavLink to="/auth">/auth</NavLink>
              </li>
          </ul>
      </div>
    );
  }
}

export default Header;
