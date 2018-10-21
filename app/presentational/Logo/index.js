// @flow
import logo from '../../assets/logo.svg';
import React, {Component} from 'react';

import "./logo.scss";

const Logo = () => (
  <div>
    <img className='logo' src={logo} />
    <h1 className='title'>Minima</h1>
  </div>
);

export default Logo;