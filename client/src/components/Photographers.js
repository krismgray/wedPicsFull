import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import PhotographerForm from './PhotographerForm';
import { getPhotographers } from '../actions/photographers';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';

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
            <Card.Meta>
              <span>
                {photographer.phone}
              </span>
            </Card.Meta>
            <Card.Description>
              {photographer.category}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={photographer.insta} >
              Link to Instagram
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
      </div>
      <br />
      <div className='categoryMenu'>
      <Container>
        <Header as="h3" textAlign="center">Photographers!</Header>
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
        { category && <Button fluid basic onClick={ () => this.setState({ category: '' }) }>Clear Filter: {category}</Button> }
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
