import React from 'react';
import { connect } from 'react-redux';

import { editBooking } from '../actions/editBooking';
import BookingForm from './BookingForm';

class BookingEdit extends React.Component {
  handleOnSubmit = (booking) => {
    this.props.editBooking(booking, this.props.model.id);
  }

  render() {
    return (
      <div>
        <h4>Update Booking:</h4>
        <BookingForm onSubmit={this.handleOnSubmit} booking={this.props.booking} />
      </div>
    );
  }
}

export default connect(null, { editBooking })(BookingEdit);