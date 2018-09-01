import React from 'react';
import Gallery from './Gallery';
import { shallow } from 'enzyme';
import GalleryImage from './GalleryImage/GalleryImage';

const shallowComponent = (images, net = '0', gross = '0') =>
  shallow(
    <Gallery
      images={images}
      netPrice={net}
      grossPrice={gross}
    />
  );

describe('render', () => {
  it('should render array of images', () => {
    const images = [
      { thumbnail: 'thumb1', fullSize: 'full1' },
      { thumbnail: 'thumb2', fullSize: 'full2' }
    ];
    const wrapper = shallowComponent(images);
    expect(wrapper.find(GalleryImage).length).toEqual(2);
  });

  it('should render net and gross prices', () => {
    const wrapper = shallowComponent([], '100 EUR', '150 EUR');
    expect(wrapper.find('h2').text()).toEqual('Current Price: 100 EUR (150 EUR)');
  });
});
