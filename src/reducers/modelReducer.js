export default function manageModels(state = {models: []}, action) {
  switch (action.type) {
    case 'FETCH_MODELS':
      return {models: action.payload};
    case 'ADD_MODEL':
      return {...state, models: [...state.models, action.payload]}
      case 'ADD_BOOKING':
        let models = state.models.map(model => {
          if (model.id === action.payload.id) {
            return action.payload;
          } else {
            return model;
          }
        })
        return {...state, models: models};
    default:
      return state;
  }
}