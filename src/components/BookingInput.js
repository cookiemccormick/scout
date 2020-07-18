import React from 'react';
import { connect } from 'react-redux';
import { addBooking } from '../actions/addBooking';
import BookingForm from './BookingForm';

class BookingInput extends React.Component {
  handleOnSubmit = (booking) => {
    this.props.addBooking(booking, this.props.model.id);
  }
  render() {
    return (
      <div>
        <h2>Booking Model:</h2>
        <BookingForm onSubmit={this.handleOnSubmit} booking={{}} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    booking: state.booking
  };
}

export default connect(mapStateToProps, { addBooking })(BookingInput);