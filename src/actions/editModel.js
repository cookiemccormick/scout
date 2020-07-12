export const editModel = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/models/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(model => dispatch({
      type: 'EDIT_MODEL',
      payload: model
    }))
  };
}