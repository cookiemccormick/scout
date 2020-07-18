import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookingForm extends React.Component {
  state = {
    job: this.props.booking.job || '',
    amount: this.props.booking.amount || '',
    start_time: this.props.booking.start_time || '',
    end_time: this.props.booking.end_time || '',
    description: this.props.booking.description || ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    console.log("hi")
    event.preventDefault();
    const booking = {...this.state, id: this.props.booking.id}

    this.props.onSubmit(booking);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="formJob">
            <Form.Label>Job:</Form.Label>
            <Form.Control type="text" placeholder="Enter job" name="job" onChange={this.handleChange} value={this.state.job}/>
          </Form.Group>
          <Form.Group controlId="formAmount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control type="number" placeholder="Enter amount" name="amount" onChange={this.handleChange} value={this.state.amount}/>
          </Form.Group>
          <Form.Group controlId="formStartTime">
            <Form.Label>Start Time:</Form.Label>
            <Form.Control type="datetime-local" name="start_time" onChange={this.handleChange} value={this.state.start_time}/>
          </Form.Group>
          <Form.Group controlId="formEndTime">
            <Form.Label>End Time:</Form.Label>
            <Form.Control type="datetime-local" name="end_time" onChange={this.handleChange} value={this.state.end_time}/>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" placeholder="description" name="description" onChange={this.handleChange} value={this.state.description}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default BookingForm;