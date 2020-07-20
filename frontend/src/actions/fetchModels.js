export function fetchModels() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/models')
    .then(response => response.json())
    .then(models => dispatch({
      type: 'FETCH_MODELS',
      payload: models
    }))
  };
}