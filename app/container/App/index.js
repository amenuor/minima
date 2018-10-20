// @flow

import React, { Component } from 'react';
import Logo from '../../presentational/Logo';
import MiddleContainer from '../../presentational/MiddleContainer';

export default class App extends Component<{}, {}> {

  constructor() {
    super();
  }

  render() {
    return (
      <MiddleContainer>
        <Logo/>
      </MiddleContainer>
    );
  }
}