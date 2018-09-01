import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FullImage from '../../components/FullImage/FullImage';

class FullImageContainer extends Component {
  state = {
    image: null
  }

  componentDidMount() {
    const image = this.props.match.params.image;
    this.setState({
      image: atob(image)
    });
  }

  render() {
    return (
      <FullImage img={this.state.image} {...this.props} />
    );
  }
}

FullImageContainer.propTypes = {
  match: PropTypes.object
};

export default FullImageContainer;
