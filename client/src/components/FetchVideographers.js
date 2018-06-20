import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Videographers from './Videographers';
import VideographersAdmin from './VideographersAdmin';
import { getVideographers } from '../actions/videographers';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchVideographers extends React.Component {
  state = { loaded: false }

  componentDidMount() {
  this.props.dispatch(getVideographers(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  }

  render() {
    let { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/videographers" component={Videographers} />
          <Route exact path="/videographersAdmin" component={VideographersAdmin} />
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

export default connect()(FetchVideographers);
