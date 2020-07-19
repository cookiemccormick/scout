import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

import { deleteBooking } from '../actions/deleteBooking';

const Bookings = (props) => {
  const handleDelete = (booking) => {
    props.deleteBooking(booking.id, booking.model_id);
  }

  const handleUpdate = (booking) => {
    props.onUpdateBooking(booking);
  }

  return (
    <div>
      <h4>Bookings: </h4>
        <Table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Amount</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.bookings.map(booking =>
              <tr key={booking.id}>
                <td>{booking.job}</td>
                <td>${booking.amount}</td>
                <td>{new Date(booking.start_time).toLocaleString()}</td>
                <td>{new Date(booking.end_time).toLocaleString()}</td>
                <td>{booking.description}</td>
                <td><button onClick={() => handleUpdate(booking)}>Update</button></td>
                <td><button onClick={() => handleDelete(booking)}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </Table>
    </div>
  );
}

export default connect(null, { deleteBooking })(Bookings);