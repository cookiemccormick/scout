import React from 'react';

const Bookings = (props) => {
  return (
    <div>
      {props.bookings && props.bookings.map(booking =>
        <li key={booking.id}>
          {booking.job} -
          {booking.amount} -
          {booking.start_time} -
          {booking.end_time} -
          {booking.description}
        </li>
      )}
    </div>
  );
}

export default Bookings;