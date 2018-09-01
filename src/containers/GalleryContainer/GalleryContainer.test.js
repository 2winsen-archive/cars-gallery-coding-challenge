import React from 'react';
import { shallow } from 'enzyme';

import GalleryContainer from './GalleryContainer';

jest.mock('../../hoc/withSpinner/withSpinner', () =>
  jest.fn().mockImplementation((Component) => Component)
);

jest.mock('../../hoc/withCommunicationError/withCommunicationError', () =>
  jest.fn().mockImplementation((Component) => Component)
);

import axios from '../../axios';
jest.mock('../../axios', () => ({
  get: () => null
}));

const shallowComponent = () =>
  shallow(<GalleryContainer />);

const getResp = ({ images = [], title, net, gross }) => ({
  data: {
    images,
    title,
    price: { net, gross }
  }
});

describe('render', () => {
  it('should set images to state', () => {
    const resp = getResp({
      images: [
        { uri: 'image1', thumb: 'thumb1' },
        { uri: 'image2', thumb: 'thumb2' }
      ]
    });
    axios.get = jest.fn().mockImplementation(() => Promise.resolve(resp));
    const wrapper = shallowComponent();
    return Promise.resolve().then(() => {
      expect(wrapper.state().images.length).toEqual(2);
      expect(wrapper.state().images[0]).toEqual({
        fullSize: 'image1',
        thumbnail: 'thumb1'
      });
    });
  });

  it('should set title to state', () => {
    const resp = getResp({ title: 'Title' });
    axios.get = jest.fn().mockImplementation(() => Promise.resolve(resp));
    const wrapper = shallowComponent();
    return Promise.resolve().then(() => {
      expect(wrapper.state().title).toEqual('Title');
    });
  });

  it('should set net price to state', () => {
    const resp = getResp({ net: '100 EUR' });
    axios.get = jest.fn().mockImplementation(() => Promise.resolve(resp));
    const wrapper = shallowComponent();
    return Promise.resolve().then(() => {
      expect(wrapper.state().netPrice).toEqual('100 EUR');
    });
  });

  it('should set gross price to state', () => {
    const resp = getResp({ gross: '150 EUR' });
    axios.get = jest.fn().mockImplementation(() => Promise.resolve(resp));
    const wrapper = shallowComponent();
    return Promise.resolve().then(() => {
      expect(wrapper.state().grossPrice).toEqual('150 EUR');
    });
  });
});
