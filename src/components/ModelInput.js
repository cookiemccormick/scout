import React from 'react';
import { connect } from 'react-redux';
import { addModel } from '../actions/addModel';

class ModelInput extends React.Component {
  state = {
    name: '',
    picture: '',
    height: '',
    bust: '',
    waist: '',
    hip: '',
    shoe: '',
    eyes: '',
    hair: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    this.props.addModel(formData, this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} encType="multipart/form-data">
          <label>Model Name: </label>
          <input type='text'placeholder='name' value={this.state.name} onChange={this.handleChange} name='name'/><br/>
          <label>Select Image: </label>
          <input type='file' placeholder='picture' value={this.state.picture} onChange={this.handleChange} name='picture' accept='image/*'/><br/>
          <label>Height: </label>
          <input type='number' placeholder='height in inches' value={this.state.height} onChange={this.handleChange} name='height'/><br/>
          <label>Bust: </label>
          <input type='number' placeholder='bust' value={this.state.bust} onChange={this.handleChange} name='bust'/><br/>
          <label>Waist: </label>
          <input type='number' placeholder='waist' value={this.state.waist} onChange={this.handleChange} name='waist'/><br/>
          <label>Hip: </label>
          <input type='number' placeholder='hip' value={this.state.hip} onChange={this.handleChange} name='hip'/><br/>
          <label>Shoe: </label>
          <input type='number' placeholder='shoe' value={this.state.shoe} onChange={this.handleChange} name='shoe'/><br/>
          <label>Eyes: </label>
          <input type='text' placeholder='eyes' value={this.state.eyes} onChange={this.handleChange} name='eyes'/><br/>
          <label>Hair: </label>
          <input type='text' placeholder='hair' value={this.state.hair} onChange={this.handleChange} name='hair'/><br/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default connect(null, { addModel })(ModelInput);