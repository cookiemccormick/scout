export const deleteModel = (modelId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/models/${modelId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(model => dispatch({
      type: 'DELETE_MODEL',
      payload: model
    }))
  };
}