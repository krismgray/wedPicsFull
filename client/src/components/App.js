import React, { Component } from 'react';
import NoMatch from './NoMatch';
import Home from './Home';
import PhotographersAdmin from './PhotographersAdmin';
import FetchPhotographers from './FetchPhotographers';
import FetchVideographers from './FetchVideographers';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/photographers" component={FetchPhotographers} />
            <Route path="/photographersAdmin" component={PhotographersAdmin} />
            <Route path="/videographers" component={FetchVideographers} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
