export default function manageModels(state = {models: []}, action) {
  switch (action.type) {
    case 'FETCH_MODELS':
      return {models: action.payload};
    case 'ADD_MODEL':
      return {...state, models: [...state.models, action.payload]}
    default:
      return state;
  }
}