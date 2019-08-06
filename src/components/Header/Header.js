import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './Header.scss'


const Links = () => (
    <nav>
      <NavLink exact to="/">Home </NavLink> |
      <NavLink to="/statistic"> Statistic </NavLink> |
      <NavLink to="/contact"> Contact</NavLink> |
      <NavLink to="/signup"> Signup</NavLink> 

    </nav>
  )

class Header extends Component {
    render() {
       
        return (
            <div className="header">
                <Links></Links>
            </div>
            )
      }
}

export default Header;

