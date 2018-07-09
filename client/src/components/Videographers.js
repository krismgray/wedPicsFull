import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import VideographerForm from './VideographerForm';
import { getVideographers } from '../actions/videographers';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button, Icon } from 'semantic-ui-react';

class Videographers extends React.Component {
  state = { category: '', videographers: [] }

  videographers = () => {
    let { videographers } = this.props;
    let { category } = this.state;
    let visible = videographers;
    if (category)
      visible = videographers.filter( a => a.category === category )
    return visible.map( videographer =>
      <Grid.Column computer={4}>
        <Card key={videographer.id}>
          { videographer.img_url && <Image src={videographer.img_url} /> }
          <Card.Content>
            <Card.Header>
              {videographer.name}
            </Card.Header>
            <Card.Meta>
              <span>
                {videographer.phone}
              </span>
            </Card.Meta>
            <Card.Description>
              {videographer.category}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={videographer.insta} >
              Link to Instagram
            </a>
          </Card.Content>
        </Card>
        <br />
      </Grid.Column>
    )
  }

  addVideographer = (videographer) => {
    const { videographers } = this.state;
    this.setState({ videographers: [videographer, ...videographers] })
  }

  categoryOptions = () => {
    return this.props.categories.map( (c,i) => { return { key: i, text: c, value: c } })
  }

  render() {
    let { category } = this.state;
    return (
      <div>
      <div className='bodycolor'>
        <div className='menuOptionsTwo'>
          <NavMenu />
        </div>
        <div className='topPage'>
          <br />
          <div className='topPageText'>
            <Container>
              <Header as="h1" textAlign="center">Videographers!</Header>
              <p>Use the filter option to narrow down your search <Icon name="arrow alternate circle down" /></p>
            </Container>
          </div>
          <br />
        </div>
      </div>
      <br />
      <div className='categoryMenu'>
      <Container>
        <Header as="h3" textAlign="center">Videographers!</Header>
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
      <div className='VideoBody'>
        <Grid columns={16}>
          <Grid.Row>
            { this.videographers() }
          </Grid.Row>
        </Grid>
      </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  const videographers = state.videographers;
  const categories = [...new Set(videographers.map( a => a.category ))]
  return { videographers, categories}
}

export default connect(mapStateToProps)(Videographers);
