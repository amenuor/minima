// @flow
import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import MiddleContainer from '../../../presentational/MiddleContainer';
import Logo from '../../../presentational/Logo';

const renderComponent = (props = {}) =>
  shallow(
    <App/>
  );

describe('<App/>', () => {
  it('should render a <MiddleContainer> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual(MiddleContainer);
  });

  it('should have a single children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.children()).toHaveLength(1);
  });

  it('should have a Logo component in the MiddleContainer', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.children().get(0)).toEqual(<Logo />);
  });


});