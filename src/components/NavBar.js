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
  textAlign: 'center'
}

const NavBar = () => {
  return(
  <div>
    <NavLink
      to='/topics/chart'
      exact
      style={link}
      activeStyle={{
        background: 'coral'
      }}>
      Overview
    </NavLink>
    <NavLink
      to='/topics'
      exact
      style={link}
      activeStyle={{
        background: 'coral'
      }}>
      Topics
    </NavLink>
    <NavLink
      to='/'
      exact
      style={link}
      activeStyle={{
        background: 'coral'
      }}>
        Home
      </NavLink>

  </div>
)
}

export default NavBar
