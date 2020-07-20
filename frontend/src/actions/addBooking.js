export const addBooking = (booking, modelId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/models/${modelId}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking)
    })
    .then(response => response.json())
    .then(model => dispatch({
      type: 'ADD_BOOKING',
      payload: model
    }))
  };
}