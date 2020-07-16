import React from 'react';

import WallPage from './pages/WallPage';
import GalleryPage from './pages/GalleryPage';
import ImagePage from './pages/ImagePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/wall' component={WallPage} />
          <Route path='/gallery' component={GalleryPage} />
          <Route path='/image' component={ImagePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
