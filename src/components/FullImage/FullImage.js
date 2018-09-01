import React from 'react';
import PropTypes from 'prop-types';

import Close from './Close/Close';

import './FullImage.css';

const FullImage = ({ img, imgAlt, history }) => {
  return (
    <div className="FullImage">
      <Close onClick={() => history.push('/')} />
      <img className="FullImage__img" src={img} alt={imgAlt} />
    </div>
  );
};

FullImage.propTypes = {
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  history: PropTypes.object
};

export default FullImage;