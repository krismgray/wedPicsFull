import React from 'react';
import '../Home.css';
import { Header, Icon } from 'semantic-ui-react';

class Footer extends React.Component {

  render() {
    return(
      <div className='footer'>
        <div className='footer1'>
          <Header as='h1'>Budget Pics</Header>
          <br />
          <p className='footnote2'>|</p>
          <br />
          <a href="https://www.facebook.com/">
            <Icon color='black' name='facebook square' size='big' />
          </a>
          <a href="https://www.instagram.com/">
            <Icon color='black' name='instagram' size='big' />
          </a>
          </div>
          <div className='footnote2'>
            <p>©2018 Budget Pics | All rights reserved | Designed by Kris Gray</p>
          </div>
          <div className='footnote3'>
          <a href="mailto:kris.m.gray@gmail.com">
            kris.m.gray@gmail.com
          </a>
          <p className='footnote2'>|</p>
            <a href="tel:1-801-706-7057">
              <p>(801)706-7057</p>
            </a>
          </div>
      </div>
    )
  }
}

export default Footer;
