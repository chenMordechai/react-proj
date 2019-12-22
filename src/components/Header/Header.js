import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './Header.scss'


const Links = () => (
    <nav>
      <h2><NavLink exact to="/">misterBitcoin</NavLink></h2>
      <div>
      <NavLink to="/statistic"> Statistic </NavLink> |
      <NavLink to="/contact"> Contact</NavLink> |
      <NavLink to="/signup"> Signup</NavLink> 
      </div>

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

