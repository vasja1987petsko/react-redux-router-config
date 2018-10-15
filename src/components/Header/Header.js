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
                  <NavLink to="/about">/about</NavLink>
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
              <li>
                  <NavLink to="/form-validation">form-validation</NavLink>
              </li>
              <li>
                  <NavLink to="/react-validation">react-validation</NavLink>
              </li>
          </ul>
      </div>
    );
  }
}

export default Header;
