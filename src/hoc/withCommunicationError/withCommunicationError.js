import React, { Component } from 'react';
import CommunicationError from '../../components/CommunicationError/CommunicationError';
import { getHocDisplayName } from '../../utils/utils';

const withCommunicationError = (WrappedComponent, axios) => {
  const withCommunicationErrorComponent = class extends Component {
    state = {
      hasError: false
    }

    componentWillMount() {
      this.resInterceptors = axios.interceptors.response
        .use(
          resp => {
            if (!resp) {
              this.setState({ hasError: true });
            }
            return resp;
          },
          () => this.setState({ hasError: true })
        );
    }

    componentWillUnmount() {
      axios.interceptors.response
        .eject(this.resInterceptors);
    }

    render() {
      let cmp = <WrappedComponent {...this.props} />;
      if (this.state.hasError) {
        cmp = <CommunicationError />;
      }
      return cmp;
    }
  };
  
  withCommunicationErrorComponent.displayName = getHocDisplayName('withCommunicationError', WrappedComponent);
  return withCommunicationErrorComponent;
};

export default withCommunicationError;