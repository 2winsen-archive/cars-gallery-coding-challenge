import React from 'react';
import PropTypes from 'prop-types';

import './Close.css';

const Close = ({ onClick }) => {
  return (
    <span className="Close" onClick={onClick} />
  );
};

Close.propTypes = {
  onClick: PropTypes.func
};

export default Close;