export const addModel = (formData, data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/models', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => response.json())
    .then(model => dispatch({
      type: 'ADD_MODEL',
      payload: model
    }))
  };
}