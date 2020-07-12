import React from 'react';
import { connect } from 'react-redux';
import { addBooking } from '../actions/addBooking';

class BookingInput extends React.Component {
  state = {
    job: '',
    amount: '',
    start_time: '',
    end_time: '',
    description: ''
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBooking(this.state, this.props.model.id);
    this.setState({
      job: '',
      amount: '',
      start_time: '',
      end_time: '',
      description: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Job: </label>
          <input type='text' placeholder='job' value={this.state.job} onChange={this.handleOnChange} name='job'/><br/>
          <label>Amount: </label>
          <input type='number' placeholder='amount' value={this.state.amount} onChange={this.handleOnChange} name='amount'/><br/>
          <label>Start Time: </label>
          <input type='datetime-local' placeholder='start time' value={this.state.start_time} onChange={this.handleOnChange} name='start_time'/><br/>
          <label>End Time: </label>
          <input type='datetime-local' placeholder='end time' value={this.state.end_time} onChange={this.handleOnChange} name='end_time'/><br/>
          <label>Description: </label>
          <input type='text' placeholder='description' value={this.state.description} onChange={this.handleOnChange} name='description'/><br/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default connect(null, { addBooking })(BookingInput);