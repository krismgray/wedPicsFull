import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import axios from 'axios';
import PhotographerForm from './PhotographerForm';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';

class PhotographersAdmin extends React.Component {
  state = { photographers: [] }

 componentDidMount() {
   axios.get('/api/photographers')
    .then( ({ data: photographers }) => this.setState({ photographers }) )
 }

  addPhotographer = (photographer) => {
    const { photographers } = this.state;
    this.setState({ photographers: [photographer, ...photographers] })
  }

  deletePhotographer = (id) => {
    const { photographers } = this.state;
    axios.delete(`/api/photographers/${id}`)
      .then( ({ data }) => {
        this.setState({ photographers: [] })
      })
  }

  render() {
    const { photographers } = this.state;
    return (
      <div>
      <br />
      <div className='PhotoBody'>
        { photographers.map( photographer =>
          <Card key={photographer.id} >
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
              <Card.Meta>
                <span>
                  {photographer.email}
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
            </Card.Content>
            <Button basic onClick={ () => this.deletePhotographer(photographer.id)}>Delete</Button>
          </Card>
      )}
      </div>
      <div className='formCreate'>
        <PhotographerForm addPhotographer={this.addPhotographer} />
      </div>
    </div>
    )
  }
}


export default PhotographersAdmin;
