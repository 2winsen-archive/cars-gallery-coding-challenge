import React from 'react';
import GalleryImage from './GalleryImage';
import { shallow } from 'enzyme';

const shallowComponent = () => shallow(<GalleryImage img="source" imgAlt="desc" />);

describe('render', () => {
  it('should render image', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('img').prop('src')).toEqual('source');
    expect(wrapper.find('img').prop('alt')).toEqual('desc');
  });
});
