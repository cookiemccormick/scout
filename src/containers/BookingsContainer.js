import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';

class BookingsContainer extends React.Component {
  render() {
    return (
      <div>
        <Bookings bookings={this.props.model && this.props.model.bookings} />
        <h3>Add Booking</h3>
        <BookingInput model={this.props.model} />
      </div>
    );
  }
}

export default connect(null)(BookingsContainer);