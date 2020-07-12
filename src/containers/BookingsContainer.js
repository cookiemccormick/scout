import React from 'react';
import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';

class BookingsContainer extends React.Component {
  render() {
    return (
      <div>
        <BookingInput model={this.props.model} />
        <Bookings bookings={this.props.model && this.props.model.bookings} />
      </div>
    );
  }
}

export default BookingsContainer;