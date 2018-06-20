import React, { Component } from 'react';
import { Header, Form, TextArea, Button, List, Segment, Container, Image, Card, Select } from 'semantic-ui-react';
import axios from 'axios';
import Dropzone from 'react-dropzone';


  const options = [
    { key: '1', text: '$200-$400', value: '$200-$400'},
    { key: '2', text: '$400-$600', value: '$400-$600'},
    { key: '3', text: '$600-$800', value: '$600-$800'},
    { key: '4', text: '$800-$1000', value: '$800-1000'},
  ]


class VideographerForm extends Component{
  state = { name: '', value: '', phone: '', category: '', insta: '', videographers: [] }

  onDrop = (files) => {
  this.setState({ file: files[0] })
  }

  handleChange = (e) => {
  this.setState({ name: e.target.value })
  }

  handleChanged = (e) => {
  this.setState({ insta: e.target.value })
  }

  handleChanger = (e) => {
  this.setState({ phone: e.target.value })
  }

  handleChangey = (e) => {
  this.setState({ email: e.target.value })
  }

  handleChanges = (e) => {
  this.setState({ category: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const { name, phone, category, file, videographers, insta } = this.state;
    data.append('name', name);
    data.append('phone', phone);
    data.append('insta', insta);
    data.append('category', category);
    data.append('img', file);
    axios.post('/api/videographers', data)
    .then( res => {
      this.props.addVideographer(res.data)
      this.setState({ name: '', phone: '', category: '', file: '', insta: '' })
    })
  }

  render() {
    const { name, videographers, phone, email, category } = this.state;
    return (
      <div>
        <br />
        <div className='blogForm'>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                required
                label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                  />
                <Form.Input
                  required
                  label="Instagram Link"
                  value={this.state.insta}
                  onChange={this.handleChanged}
                    />
              <Form.Input
                required
                label="Phone Number"
                value={this.state.phone}
                onChange={this.handleChanger}
                  />
                  <Form.Input
                    required
                    label="Category"
                    value={this.state.category}
                    onChange={this.handleChanges}
                      />
                <Dropzone
                style={
                  {
                    marginBottom: '10px',
                    border: 'dashed 1px black',
                    width: '100%',
                    height: '50px',
                    textAlign: 'center'
                  }
                }
                onDrop={this.onDrop}
                multiple={false}
                disablePreview={false}
                disableClick={false}
              >
                Want to add an image? Click here or Drag and drop!
              </Dropzone>
              <Form.Button>Submit</Form.Button>
            </Form>
          </Container>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default VideographerForm;
