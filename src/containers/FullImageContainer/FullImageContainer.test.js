import React from 'react';
import FullImageContainer from './FullImageContainer';
import { shallow } from 'enzyme';

const shallowComponent = (match) =>
  shallow(
    <FullImageContainer
      match={match}
    />
  );

describe('render', () => {
  it('should set base64 image to state', () => {
    const match = {
      params: {
        // TestImage in base64
        image: 'VGVzdEltYWdl'
      }
    };
    const wrapper = shallowComponent(match);
    expect(wrapper.state().image).toEqual('TestImage');
  });
});
