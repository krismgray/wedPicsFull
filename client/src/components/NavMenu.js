import React, { Component } from 'react';
import { Header, Menu, Image, Button, Icon, Sidebar, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Home.css';

class NavMenu extends Component {
  state = { width: window.innerWidth, visible: false }

  handleClick = (e, { name }) => this.setState({ activeItem: name })

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMOunt() {
    window.addEventListener('resize', this.handleResize())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
      <br />
      <div className="navbar">
        <Menu secondary size='massive'>
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/Photographers">
            <Menu.Item name='photographers' active={activeItem === 'photographers'} onClick={this.handleClick}>
              Photographers
            </Menu.Item>
          </Link>
          <Link to='Videographers'>
            <Menu.Item name='videographers' active={activeItem === 'videographers'} onClick={this.handleClick}>
              Videographers
            </Menu.Item>
          </Link>
        </Menu>
      </div>
      </div>
    )} else {
      return(
        <div>
          <div className='mobilemenu'>
            <div className='mobilemenu1'>
            <Button size='big' color='black' icon onClick={this.toggleVisibility}><Icon name='content' size='large' /></Button>
            </div>
            <br />
            <div className='mobilemenu2'>
            </div>
          </div>
          <br />
            <Sidebar as={Menu} animation='overlay' visible={visible} direction='top' vertical inverted>
              <Button secondary onClick={this.toggleVisibility}><Icon name='remove' size='large' /></Button>
            <Link to="/">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
                Home
              </Menu.Item>
            </Link>
            <Link to="/Photographers">
              <Menu.Item name='photographers' active={activeItem === 'photographers'} onClick={this.handleClick}>
                Photographers
              </Menu.Item>
            </Link>
              <Link to='Videographers'>
                <Menu.Item name='videographers' active={activeItem === 'videographers'} onClick={this.handleClick}>
                  Videographers
                </Menu.Item>
              </Link>
          </Sidebar>
        </div>
      )
    }
  }
}

export default NavMenu;
