import React from 'react';
import { connect } from 'react-redux';
import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';

class BookingsContainer extends React.Component {
  state = {
    showForm: false
  }

  handleClick = (event) => {
    this.setState({showForm: true});
  }

  render() {
    return (
      <div>
        <Bookings bookings={this.props.model && this.props.model.bookings} />
        {this.state.showForm ? <BookingInput model={this.props.model}/> : <button onClick={this.handleClick}>Add Booking</button>}
      </div>
    );
  }
}

export default connect(null)(BookingsContainer);