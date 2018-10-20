// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../index';
import MiddleContainer from '../../MiddleContainer';

const renderComponent = (props = {}) =>
  shallow(
    <Spinner/>
  );

describe('<Spinner/>', () => {
  it('should render a <MiddleContainer> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual(MiddleContainer);
  });

  it('should have a div children with className spinner', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div.spinner')).toBeDefined();
  });

});