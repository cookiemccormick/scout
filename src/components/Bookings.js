import React from 'react';
import { connect } from 'react-redux';
import { deleteBooking } from '../actions/deleteBooking';

const Bookings = (props) => {
  const handleDelete = (booking) => {
    props.deleteBooking(booking.id, booking.model_id)
  }

  return (
    <div>
      <h2>Bookings</h2>
        <ul>
          {props.bookings && props.bookings.map(booking =>
            <li key={booking.id}>
            {booking.job} -
            {booking.amount} -
            {booking.start_time} -
            {booking.end_time} -
            {booking.description}
            <button onClick={() => handleDelete(booking)}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default connect(null, { deleteBooking })(Bookings);