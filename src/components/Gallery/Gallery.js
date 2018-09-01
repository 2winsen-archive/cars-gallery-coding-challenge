import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GalleryImage from './GalleryImage/GalleryImage';

import './Gallery.css';

const Gallery = ({ images, netPrice, grossPrice }) => {
  return (
    <div>
      <div className="Gallery">
        {images.map((image, index) => (
          <Link key={index} to={btoa(image.fullSize)}>
            <GalleryImage img={image.thumbnail} />
          </Link>
        ))}
      </div>
      <h2>
        <span className="Gallery-price-label">Current Price: </span>
        {netPrice} ({grossPrice})
      </h2>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    fullSize: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  })).isRequired,
  netPrice: PropTypes.string,
  grossPrice: PropTypes.string
};

export default Gallery;