import React from 'react';

class ModelInput extends React.Component {

  state = {}

  render() {
    return (
      <div>
        <form>
          <label>Model Name: </label>
          <input type='text'placeholder='name'/><br/>
          <label>Select Image: </label>
          <input type='file' placeholder='picture'/><br/>
          <label>Height: </label>
          <input type='number' placeholder='height in inches'/><br/>
          <label>Bust: </label>
          <input type='number' placeholder='bust'/><br/>
          <label>Waist: </label>
          <input type='number' placeholder='waist'/><br/>
          <label>Hip: </label>
          <input type='number' placeholder='hip'/><br/>
          <label>Shoe: </label>
          <input type='number' placeholder='shoe'/><br/>
          <label>Eyes: </label>
          <input type='text' placeholder='eyes'/><br/>
          <label>Hair: </label>
          <input type='text' placeholder='hair'/><br/>
        </form>
      </div>
    );
  }
}

export default ModelInput;