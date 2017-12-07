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
        background: '#b9eac2'
      }}>
      Overview
    </NavLink>
    <NavLink
      to='/topics/discover'
      exact
      style={link}
      activeStyle={{
        background: '#b9eac2'
      }}>
        Discover
      </NavLink>
    <NavLink
      to='/topics'
      exact
      style={link}
      activeStyle={{
        background: '#b9eac2'
      }}>
      Topics
    </NavLink>
    <NavLink
      to='/'
      exact
      style={link}
      activeStyle={{
        background: '#b9eac2'
      }}>
        Home
      </NavLink>

  </div>
)
}

export default NavBar
