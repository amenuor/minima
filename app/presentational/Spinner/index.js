// @flow
import React, {Component} from 'react';
import MiddleContainer from '../MiddleContainer';

import "./spinner.scss";

export default class Spinner extends Component<{}, {}> {

  constructor() {
    super();
  }

  render() {
    return (
      <MiddleContainer>
        <div className="spinner"/>
      </MiddleContainer>
    );
  }
}