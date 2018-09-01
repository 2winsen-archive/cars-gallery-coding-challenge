import React, { Component, Fragment } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import { getHocDisplayName } from '../../utils/utils';

const withSpinner = (WrappedComponent, axios) => {
  const withSpinnerComponent = class extends Component {
    state = {
      loading: true
    }

    componentWillMount() {
      this.resInterceptors = axios.interceptors.response
        .use(
          resp => {            
            this.setState({ loading: false });
            return resp;
          },
          () => this.setState({ loading: false })
        );
    }

    componentWillUnmount() {
      axios.interceptors.response
        .eject(this.resInterceptors);
    }

    render() {
      const spinner = this.state.loading ? <Spinner /> : null;
      return (
        <Fragment>
          {spinner}
          <WrappedComponent
            hidden={this.state.loading}
            {...this.props}
          />
        </Fragment>
      );
    }
  };

  withSpinnerComponent.displayName = getHocDisplayName('withSpinner', WrappedComponent);
  return withSpinnerComponent;
};

export default withSpinner;