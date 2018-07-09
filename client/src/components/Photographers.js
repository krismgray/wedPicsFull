import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import Footer from './Footer';
import ReactPlayer from 'react-player';
import PhotographerForm from './PhotographerForm';
import { getPhotographers } from '../actions/photographers';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button, Icon } from 'semantic-ui-react';

class Photographers extends React.Component {
  state = { category: '', photographers: [] }

  photographers = () => {
    let { photographers } = this.props;
    let { category } = this.state;
    let visible = photographers;
    if (category)
      visible = photographers.filter( a => a.category === category )
    return visible.map( photographer =>
      <Grid.Column computer={4}>
        <Card key={photographer.id}>
          { photographer.img_url && <Image src={photographer.img_url} /> }
          <Card.Content>
            <Card.Header>
              {photographer.name}
            </Card.Header>
            <p></p>
            <Card.Meta>
              <span>
                {photographer.phone}
              </span>
            </Card.Meta>
            <p></p>
            <Card.Meta>
              <span>
                <address>
                  {photographer.email}
                </address>
              </span>
            </Card.Meta>
            <Card.Description>
              {photographer.category}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <a href={photographer.insta} >
              See my work! <Icon name="instagram" />
            </a>
          </Card.Content>
        </Card>
        <br />
      </Grid.Column>
    )
  }

  addPhotographer = (photographer) => {
    const { photographers } = this.state;
    this.setState({ photographers: [photographer, ...photographers] })
  }

  categoryOptions = () => {
    return this.props.categories.map( (c,i) => { return { key: i, text: c, value: c } })
  }

  render() {
    let { category } = this.state;
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
            <Header as="h1" textAlign="center">Photographers!</Header>
            <p>Use the filter option to narrow down your search <Icon name="arrow alternate circle down" /></p>
            </Container>
          </div>
          <br />
        </div>
      </div>
      <br />
      <div className='categoryMenu'>
      <Container>
        <div className='pickPrice'>
          <p>Sort by price to make things easier!</p>
          <Dropdown
            placeholder="Filter by price"
            selection
            options={this.categoryOptions()}
            onChange={ (e, data) => this.setState({ category: data.value }) }
            value={category}
          />
        </div>
        <br />
        { category && <Button secondary fluid basic onClick={ () => this.setState({ category: '' }) }>Clear Filter: {category}</Button> }
        <Divider />
      </Container>
      <div className='PhotoBody'>
        <Grid columns={16}>
          <Grid.Row>
            { this.photographers() }
          </Grid.Row>
        </Grid>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  const photographers = state.photographers;
  const categories = [...new Set(photographers.map( a => a.category ))]
  return { photographers, categories}
}

export default connect(mapStateToProps)(Photographers);
