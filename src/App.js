import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import GalleryContainer from './containers/GalleryContainer/GalleryContainer';
import FullImageContainer from './containers/FullImageContainer/FullImageContainer';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={GalleryContainer} />
        <Route path="/:image" component={FullImageContainer} />
      </Switch>
    );
  }
}

export default App;
