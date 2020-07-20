export function fetchModel(modelId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/models/${modelId}`)
    .then(response => response.json())
    .then(model => dispatch({
      type: 'FETCH_MODEL',
      payload: model
    }))
  };
}