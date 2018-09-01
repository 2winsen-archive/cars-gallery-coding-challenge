import React from 'react';
import withCommunicationError from './withCommunicationError';
import { shallow } from 'enzyme';
import { getMockAxios } from '../../__test__/testingUtils';
import CommunicationError from '../../components/CommunicationError/CommunicationError';

const WrappedComponent = () => <h1>Test</h1>;

describe('render', () => {
  it('should NOT render error by default', () => {
    const TargetComponent = withCommunicationError(WrappedComponent, getMockAxios());
    const wrapper = shallow(<TargetComponent />);
    expect(wrapper.find(CommunicationError).length).toEqual(0);
  });

  it('should render error if http error occurred', () => {
    const mockAxios = getMockAxios();
    mockAxios.interceptors.response.use = jest.fn()
      .mockImplementation((resp, err) => err());
    const TargetComponent = withCommunicationError(WrappedComponent, mockAxios);
    const wrapper = shallow(<TargetComponent />);
    expect(wrapper.find(CommunicationError).length).toEqual(1);
  });

  it('should render error if no response data received', () => {
    const mockAxios = getMockAxios();
    mockAxios.interceptors.response.use = jest.fn()
      .mockImplementation(resp => resp());
    const TargetComponent = withCommunicationError(WrappedComponent, mockAxios);
    const wrapper = shallow(<TargetComponent />);
    expect(wrapper.find(CommunicationError).length).toEqual(1);
  });
});
