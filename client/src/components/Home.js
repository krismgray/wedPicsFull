import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Image, Menu, Container } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import '../Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='bodycolor'>
          <div className='menuOptions'>
            <NavMenu />
          </div>
          <div className='topPage'>
            <br />
            <div className='topPageText'>
              <Container>
              <Header>Welcome to BLANK!</Header>
              <p>Your one stop shop for wedding Photographers and Videographers!
                We are commited to taking out the hassle of finding an affordable
                wedding photographer and or videographer. Here at BLANK we understand
                how important getting those services arranged is and how stressfull it
                can be. Browse through our list of Photographers and Videographers to find
                one you like and get in touch with them RIGHT away. Have a wonderful Wedding!
              </p>
              </Container>
            </div>
            <br />
          </div>
          <div className='homeBody'>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
