// @flow
import React, {Component} from 'react';
import type {Node} from 'react';

import "./container.scss";

type Props = {
  children?: Node,
};

export default class MiddleContainer extends Component<Props, {}> {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}