// @flow
import logo from '../../assets/logo.svg';
import React, {Component} from 'react';

import "./logo.scss";

export default class Logo extends Component<{}, {}> {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <img className='logo' src={logo} />
        <h1 className='title'>Minima</h1>
      </div>
    );
  }
}