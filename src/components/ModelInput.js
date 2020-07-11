import React from 'react';

class ModelInput extends React.Component {

  state = {
    name: '',
    pictures: '',
    height: '',
    bust: '',
    waist: '',
    hip: '',
    shoe: '',
    eyes: '',
    hair: ''
  };

  render() {
    return (
      <div>
        <form>
          <label>Model Name: </label>
          <input type='text'placeholder='name' value={this.state.name}/><br/>
          <label>Select Image: </label>
          <input type='file' placeholder='picture' value={this.state.picture}/><br/>
          <label>Height: </label>
          <input type='number' placeholder='height in inches' value={this.state.height}/><br/>
          <label>Bust: </label>
          <input type='number' placeholder='bust' value={this.state.bust}/><br/>
          <label>Waist: </label>
          <input type='number' placeholder='waist' value={this.state.waist}/><br/>
          <label>Hip: </label>
          <input type='number' placeholder='hip' value={this.state.hip}/><br/>
          <label>Shoe: </label>
          <input type='number' placeholder='shoe' value={this.state.shoe}/><br/>
          <label>Eyes: </label>
          <input type='text' placeholder='eyes' value={this.state.eyes}/><br/>
          <label>Hair: </label>
          <input type='text' placeholder='hair' value={this.state.hair}/><br/>
        </form>
      </div>
    );
  }
}

export default ModelInput;