import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import axios from 'axios';
import PhotographerForm from './PhotographerForm';
import { getPhotographers } from '../actions/photographers';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';

class PhotographersAdmin extends React.Component {
  state = { category: '', photographers: [] }

 componentDidMount() {
   axios.get('/api/photographers')
    .then( ({ data: photographers }) => this.setState({ photographers }) )
 }

  addPhotographer = (photographer) => {
    const { photographers } = this.state;
    this.setState({ photographers: [photographer, ...photographers] })
  }

  categoryOptions = () => {
    return this.props.categories.map( (c,i) => { return { key: i, text: c, value: c } })
  }

  deletePhotographer = (id) => {
    const { photographers } = this.state;
    axios.delete(`/api/photographers/${id}`)
      .then( ({ data }) => {
        this.setState({ photographers: [] })
      })
  }

  render() {
    let { category } = this.state;
    const { photographers } = this.state;
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
        { photographers.map( photographer =>
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
            <Card.Content>
              <Button basic onCLick={this.deletePhotographer(photographer.id)}>Delete</Button>
            </Card.Content>
          </Card>
          <br />
        </Grid.Column>
      )}
      </div>
      </div>
      <div className='formCreate'>
        <PhotographerForm addPhotographer={this.addPhotographer} />
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

export default connect(mapStateToProps)(PhotographersAdmin);
