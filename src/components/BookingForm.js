import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookingForm extends React.Component {
  state = {
    id: this.props.booking.id,
    job: this.props.booking.job || '',
    amount: this.props.booking.amount || '',
    start_time: this.props.booking.start_time || '',
    end_time: this.props.booking.end_time || '',
    description: this.props.booking.description || ''
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.id !== nextProps.booking.id) {
      console.log('booking', nextProps)
      this.setState({
        id: nextProps.booking.id,
        job: nextProps.booking.job || '',
        amount: nextProps.booking.amount || '',
        start_time: new Date(nextProps.booking.start_time).toLocaleString() || '',
        end_time: nextProps.booking.end_time || '',
        description: nextProps.booking.description || ''
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const booking = {...this.state, id: this.props.booking.id}

    if (booking.end_time < booking.start_time) {
      alert('must be after start time')
    }
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