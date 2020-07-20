import React from 'react';
import { connect } from 'react-redux';

import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';
import BookingEdit from '../components/BookingEdit';

class BookingsContainer extends React.Component {
  state = {
    currentBooking: null
  }

  handleClick = (event) => {
    this.setState({currentBooking: {}});
  }

  handleUpdateBooking = (booking) => {
    this.setState({currentBooking: booking});
  }

  render() {
    return (
      <div>
        <Bookings onUpdateBooking={this.handleUpdateBooking} bookings={this.props.model && this.props.model.bookings} />
        {this.renderBookingForm()}
      </div>
    );
  }

  renderBookingForm() {
    if (!this.state.currentBooking) {
      return <button onClick={this.handleClick}>Add Booking</button>;
    }
    if (!this.state.currentBooking.id) {
      return <BookingInput booking={this.state.currentBooking} model={this.props.model} />;
    }
    return <BookingEdit booking={this.state.currentBooking} model={this.props.model}/>;
  }
}

export default connect(null)(BookingsContainer);