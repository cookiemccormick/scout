import React from 'react';

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

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Model Name: </label>
          <input type='text'placeholder='name' value={this.state.name} onChange={this.handleOnChange} name='name'/><br/>
          <label>Select Image: </label>
          <input type='file' placeholder='picture' value={this.state.picture} onChange={this.handleChange} name='picture'/><br/>
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
        </form>
      </div>
    );
  }
}

export default ModelInput;