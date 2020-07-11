import React from 'react';
import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';
import Model from '../components/Model';

class BookingsContainer extends React.Component {
  render() {
    return (
      <div>
        <BookingInput />
        <Bookings bookings={this.props.models && this.props.model.bookings} />
      </div>
    );
  }
}

export default BookingsContainer;