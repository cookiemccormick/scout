import React from 'react';
import { connect } from 'react-redux';

import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';
import BookingEdit from '../components/BookingEdit';

class BookingsContainer extends React.Component {
  state = {
    editingBooking: null
  }

  handleNewBooking = (event) => {
    this.setState({editingBooking: {}});
  }

  handleUpdateBooking = (booking) => {
    this.setState({editingBooking: booking});
  }

  render() {
    return (
      <div>
        <Bookings onUpdateBooking={this.handleUpdateBooking} bookings={this.props.model.bookings} />
        {this.renderBookingForm()}
      </div>
    );
  }

  renderBookingForm() {
    //if there is no booking, add booking button is shown
    if (!this.state.editingBooking) {
      return <button onClick={this.handleNewBooking}>Add Booking</button>;
    }
    //if the booking has no id, show add form
    if (!this.state.editingBooking.id) {
      return <BookingInput booking={this.state.editingBooking} model={this.props.model} />;
    }
    //update form
    return <BookingEdit booking={this.state.editingBooking} model={this.props.model}/>;
  }
}

export default connect(null)(BookingsContainer);