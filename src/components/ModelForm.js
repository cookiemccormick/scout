import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HEIGHTS = [
  '5\'7"',
  '5\'8"',
  '5\'9"',
  '5\'10"',
  '5\'11"',
  '6\'',
  '6\'1"',
  '6\'2"',
  '6\'3"',
  '6\'4"',
  '6\'5"',
];

class ModelForm extends React.Component {
  state = {
    name: this.props.model.name || '',
    picture: '',
    height: this.props.model.height || '',
    bust: this.props.model.bust || '',
    waist: this.props.model.waist || '',
    hip: this.props.model.hip || '',
    shoe: this.props.model.shoe || '',
    eyes: this.props.model.eyes || '',
    hair: this.props.model.hair || ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    const model = {...this.state, id: this.props.model.id};
    const formData = new FormData(event.target);

    this.props.onSubmit(formData, model);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleOnSubmit} encType="multipart/form-data">
          <Form.Group controlId="formName">
            <Form.Label>Model Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange} value={this.state.name}/>
          </Form.Group>
          <Form.Group controlId="formPicture">
            <Form.Label>Picture:</Form.Label>
            <Form.Control type="file" name="picture" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formHeight">
            <Form.Label>Height:</Form.Label>
            <Form.Control as="select" value={this.state.height} onChange={this.handleChange} name='height'>
              {HEIGHTS.map(value => {
                return (
                  <option key={value}>{value}</option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBust">
            <Form.Label>Bust:</Form.Label>
            <Form.Control type="number" placeholder="Enter Bust" name="bust" onChange={this.handleChange} value={this.state.bust}/>
          </Form.Group>
          <Form.Group controlId="formWaist">
            <Form.Label>Waist:</Form.Label>
            <Form.Control type="number" placeholder="Enter Waist" name="waist" onChange={this.handleChange} value={this.state.waist}/>
          </Form.Group>
          <Form.Group controlId="formHip">
            <Form.Label>Hip:</Form.Label>
            <Form.Control type="number" placeholder="Enter Hip" name="hip" onChange={this.handleChange} value={this.state.hip}/>
          </Form.Group>
          <Form.Group controlId="formHip">
            <Form.Label>Shoe:</Form.Label>
            <Form.Control type="number" placeholder="Enter Shoe" name="shoe" onChange={this.handleChange} value={this.state.shoe}/>
          </Form.Group>
          <Form.Group controlId="formEyes">
            <Form.Label>Eyes:</Form.Label>
            <Form.Control type="text" placeholder="Enter Eyes" name="eyes" onChange={this.handleChange} value={this.state.eyes}/>
          </Form.Group>
          <Form.Group controlId="formHair">
            <Form.Label>Hair:</Form.Label>
            <Form.Control type="text" placeholder="Enter Hair" name="hair" onChange={this.handleChange} value={this.state.hair}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form><br/>
      </div>
    );
  }
}

export default ModelForm;