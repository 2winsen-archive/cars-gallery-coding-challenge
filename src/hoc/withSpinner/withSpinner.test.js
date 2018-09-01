import React from 'react';
import withSpinner from './withSpinner';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner/Spinner';
import { getMockAxios } from '../../__test__/testingUtils';

const WrappedComponent = () => <h1>Test</h1>;

describe('render', () => {
  it('should render spinner by default', () => {
    const TargetComponent = withSpinner(WrappedComponent, getMockAxios());
    const wrapper = shallow(<TargetComponent />);
    expect(wrapper.find(Spinner).length).toEqual(1);
    expect(wrapper.find('WrappedComponent').prop('hidden')).toEqual(true);
  });

  it('should NOT render spinner after successful response was received', () => {
    const mockAxios = getMockAxios();
    mockAxios.interceptors.response.use = jest.fn()
      .mockImplementation(resp => resp('resp'));
    const TargetComponent = withSpinner(WrappedComponent, mockAxios);
    const wrapper = shallow(<TargetComponent />);
    expect(wrapper.find(Spinner).length).toEqual(0);
    expect(wrapper.find('WrappedComponent').prop('hidden')).toEqual(false);
  });

  it('should NOT render spinner after error response was received', () => {
    const mockAxios = getMockAxios();
    mockAxios.interceptors.response.use = jest.fn()
      .mockImplementation((resp, err) => err('err'));
    const TargetComponent = withSpinner(WrappedComponent, mockAxios);
    const wrapper = shallow(<TargetComponent />);
    expect(wrapper.find(Spinner).length).toEqual(0);
    expect(wrapper.find('WrappedComponent').prop('hidden')).toEqual(false);
  });
});
