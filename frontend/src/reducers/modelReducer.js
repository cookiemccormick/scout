function manageModels(state = {models: []}, action) {
  switch (action.type) {
    case 'FETCH_MODELS':
      return {models: action.payload};
    case 'FETCH_MODEL':
      return {model: action.payload};
    //add model to state
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
    case 'DELETE_MODEL':
      return{
        ...state,
        models: state.models.filter(model => model.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export default manageModels;