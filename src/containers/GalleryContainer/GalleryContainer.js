import React, { Component } from 'react';
import axios from '../../axios';
import PropTypes from 'prop-types';

import Gallery from '../../components/Gallery/Gallery';
import withSpinner from '../../hoc/withSpinner/withSpinner';
import withCommunicationError from '../../hoc/withCommunicationError/withCommunicationError';
import { compose } from '../../utils/utils';
import Layout from '../../hoc/Layout/Layout';

class GalleryContainer extends Component {
  state = {
    images: [],
    title: '',
    netPrice: '',
    grossPrice: ''
  }

  componentDidMount() {
    axios.get()
      .then(resp => {
        if (!resp) {
          return;
        }
        const data = resp.data;
        if (data.images) {
          const images = data.images
            .map(({ uri, thumb }) => ({
              thumbnail: `${thumb}`,
              fullSize: `${uri}`
            }));
          this.setState({
            images,
            title: data.title,
            netPrice: data.price.net,
            grossPrice: data.price.gross
          });
        }
      });
  }

  render() {
    const classes = this.props.hidden ? 'hidden' : '';
    return (
      <Layout title={this.state.title} className={classes}>
        <Gallery
          images={this.state.images}
          netPrice={this.state.netPrice}
          grossPrice={this.state.grossPrice}
        />
      </Layout>
    );
  }
}

GalleryContainer.propTypes = {
  hidden: PropTypes.bool
};

export default compose(
  withSpinner,
  withCommunicationError
)(GalleryContainer, axios);