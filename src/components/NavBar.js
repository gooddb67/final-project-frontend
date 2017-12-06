import React from 'react';
import {NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '8px',
  margin: '0 6px 6px',
  background: '#daf0de',
  textDecoration: 'none',
  color: 'black',
  float: 'right',
  textAlign: 'center',
}

const NavBar = () => {
  return(
  <div>
    <NavLink
      to='/topics/chart'
      exact
      style={link}
      activeStyle={{
        background: '#f2a88d'
      }}>
      Overview
    </NavLink>
    <NavLink
      to='/topics/discover'
      exact
      style={link}
      activeStyle={{
        background: '#f2a88d'
      }}>
        Discover
      </NavLink>
    <NavLink
      to='/topics'
      exact
      style={link}
      activeStyle={{
        background: '#f2a88d'
      }}>
      Topics
    </NavLink>
    <NavLink
      to='/'
      exact
      style={link}
      activeStyle={{
        background: '#f2a88d'
      }}>
        Home
      </NavLink>

  </div>
)
}

export default NavBar
