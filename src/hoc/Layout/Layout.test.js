import React from 'react';
import Layout from './Layout';
import { shallow } from 'enzyme';

const shallowComponent = () => shallow(<Layout title="Title">Body</Layout>);

describe('render', () => {
  it('should render header', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('.Layout-header').text()).toEqual('Title');
  });

  it('should render children', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('.Layout-body').text()).toEqual('Body');
  });
});
