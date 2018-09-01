import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

const Layout = ({ children, title, className }) => {
  return (
    <div className={['Layout', className].join(' ')}>
      <header className="Layout-header">
        <h2>{title}</h2>
      </header>
      <div className="Layout-body">
        {children}
      </div>
      <footer className="Layout-footer">
        Images are taken from <b>Wikimedia Commons</b>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};

export default Layout;