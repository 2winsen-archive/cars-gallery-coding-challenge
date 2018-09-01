import React from 'react';
import PropTypes from 'prop-types';

import './GalleryImage.css';

const GalleryImage = ({ img, imgAlt }) => {
  return (
    <div className="GalleryImage">
      <img src={img} alt={imgAlt} />
    </div>
  );
};

GalleryImage.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};

export default GalleryImage;