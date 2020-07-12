import React from 'react';
import { connect } from 'react-redux';
import { editModel } from '../actions/editModel';

class ModelEdit extends React.Component {
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
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    let model = {...this.state, id: this.props.model.id}
    this.props.editModel(model);
    this.setState({
      name: '',
      picture: '',
      height: '',
      bust: '',
      waist: '',
      hip: '',
      shoe: '',
      eyes: '',
      hair: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} action='/action_page.php'>
          <label>Model Name: </label>
          <input type='text' placeholder='name' value={this.state.name} onChange={this.handleOnChange} name='name'/><br/>
          <label>Select Image: </label>
          <input type='file' placeholder='picture' value={this.state.picture} onChange={this.handleOnChange} name='picture' accept='image/*'/><br/>
          <label>Height: </label>
          <input type='number' placeholder='height in inches' value={this.state.height} onChange={this.handleOnChange} name='height'/><br/>
          <label>Bust: </label>
          <input type='number' placeholder='bust' value={this.state.bust} onChange={this.handleOnChange} name='bust'/><br/>
          <label>Waist: </label>
          <input type='number' placeholder='waist' value={this.state.waist} onChange={this.handleOnChange} name='waist'/><br/>
          <label>Hip: </label>
          <input type='number' placeholder='hip' value={this.state.hip} onChange={this.handleOnChange} name='hip'/><br/>
          <label>Shoe: </label>
          <input type='number' placeholder='shoe' value={this.state.shoe} onChange={this.handleOnChange} name='shoe'/><br/>
          <label>Eyes: </label>
          <input type='text' placeholder='eyes' value={this.state.eyes} onChange={this.handleOnChange} name='eyes'/><br/>
          <label>Hair: </label>
          <input type='text' placeholder='hair' value={this.state.hair} onChange={this.handleOnChange} name='hair'/><br/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default connect(null, { editModel })(ModelEdit);