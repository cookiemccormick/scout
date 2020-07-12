import React from 'react';
import { connect } from 'react-redux';
import { deleteBooking } from '../actions/deleteBooking';

const Bookings = (props) => {
  const handleOnClick = (booking) => {
    props.deleteBooking(booking.id, booking.model_id)
  }

  return (
    <div>
      {props.bookings && props.bookings.map(booking =>
        <li key={booking.id}>
          {booking.job} -
          {booking.amount} -
          {booking.start_time} -
          {booking.end_time} -
          {booking.description}
          <button onClick={() => handleOnClick(booking)}>Delete</button>
        </li>
      )}
    </div>
  );
}

export default connect(null, { deleteBooking })(Bookings);