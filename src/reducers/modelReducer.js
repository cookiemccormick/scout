export default function manageModels(state = {models: []}, action) {
  switch (action.type) {
    case 'FETCH_MODELS':
      return {models: action.payload};
    case 'FETCH_MODEL':
      return {model: action.payload};
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
    case 'DELETE_BOOKING':
      let modelsTwo = state.models.map(model => {
        if (model.id === action.payload.id) {
          return action.payload;
        } else {
          return model;
        }
      })
      return {...state, models: modelsTwo};
    case 'EDIT_MODEL':
      let modelsThree = state.models.map(model => {
        if (model.id === action.payload.id) {
          return action.payload;
        } else {
          return model;
        }
      })
      return {...state, models: modelsThree};
    default:
      return state;
  }
}