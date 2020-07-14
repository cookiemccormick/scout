export const editModel = (formData, data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/models/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => response.json())
    .then(model => dispatch({
      type: 'EDIT_MODEL',
      payload: model
    }))
  };
}