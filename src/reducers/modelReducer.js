function manageModels(state = {models: []}, action) {
  switch (action.type) {
    case 'FETCH_MODELS':
      return {models: action.payload};
    case 'FETCH_MODEL':
      return {model: action.payload};
    case 'ADD_MODEL':
      return {model: action.payload};
    case 'ADD_BOOKING':
      return {model: action.payload};
    case 'DELETE_BOOKING':
      return {model: action.payload};
    case 'EDIT_MODEL':
      return {model: action.payload};
    case 'EDIT_BOOKING':
      return {model: action.payload};
    default:
      return state;
  }
}

export default manageModels;