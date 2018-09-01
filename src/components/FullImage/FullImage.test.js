import React from 'react';
import FullImage from './FullImage';
import { shallow } from 'enzyme';

const shallowComponent = () => shallow(<FullImage img="source" imgAlt="desc" />);

describe('render', () => {
  it('should render image', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('img').prop('src')).toEqual('source');
    expect(wrapper.find('img').prop('alt')).toEqual('desc');
  });

  it('should simulate close click', () => {
    const historyMock = {
      push: jest.fn()
    };
    const wrapper = shallow(<FullImage history={historyMock} />);
    wrapper.find('Close').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/');
  });
});
