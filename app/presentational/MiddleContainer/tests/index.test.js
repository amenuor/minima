// @flow
import React from 'react';
import { shallow } from 'enzyme';

import MiddleContainer from '../index';

const expectedChildren = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  shallow(
    <MiddleContainer>
      {expectedChildren}
    </MiddleContainer>,
  );

describe('<MiddleContainer/>', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const expectedClassName = 'container';
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').hasClass(expectedClassName)).toEqual(true);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(expectedChildren)).toEqual(true);
  });

});