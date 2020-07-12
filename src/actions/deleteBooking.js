export const deleteBooking = (bookingId, modelId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/models/${modelId}/bookings/${bookingId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(model => dispatch({
      type: 'DELETE_BOOKING',
      payload: model
    }))
  };
}