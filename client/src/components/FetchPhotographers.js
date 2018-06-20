import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Photographers from './Photographers';
import PhotographersAdmin from './PhotographersAdmin';
import { getPhotographers } from '../actions/photographers';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchPhotographers extends React.Component {
  state = { loaded: false }

  componentDidMount() {
  this.props.dispatch(getPhotographers(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    let { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/photographers" component={Photographers} />
          <Route exact path="/photographersAdmin" component={PhotographersAdmin} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchPhotographers);
