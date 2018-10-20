// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../index';

const renderComponent = (props = {}) =>
  shallow(
    <Logo/>
  );

describe('<Logo/>', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have an img children with className attribute', () => {
    const expectedClassName = 'logo';
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').hasClass(expectedClassName)).toEqual(true);
  });

  it('should have an img children with className attribute', () => {
    const expectedClassName = 'title';
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('h1').hasClass(expectedClassName)).toEqual(true);
  });


});