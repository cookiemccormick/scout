import React from 'react';
import { connect } from 'react-redux';
import { deleteBooking } from '../actions/deleteBooking';

const Bookings = (props) => {
  const handleDelete = (booking) => {
    props.deleteBooking(booking.id, booking.model_id)
  }

  return (
    <div>
      <h2>Bookings: </h2>
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Amount</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.bookings && props.bookings.map(booking =>
              <tr key={booking.id}>
                <td>{booking.job}</td>
                <td>{booking.amount}</td>
                <td>{booking.start_time}</td>
                <td>{booking.end_time}</td>
                <td>{booking.description} <button onClick={() => handleDelete(booking)}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}

export default connect(null, { deleteBooking })(Bookings);