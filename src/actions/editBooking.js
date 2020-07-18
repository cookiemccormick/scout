export const editBooking = (booking, modelId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/models/${modelId}/bookings/${booking.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(response => response.json())
    .then(booking => dispatch({
      type: 'EDIT_BOOKING',
      payload: booking
    }))
  };
}