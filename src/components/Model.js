import React from 'react';
// import { Redirect } from 'react-router-dom';
import BookingsContainer from '../containers/BookingsContainer';
import ModelEdit from './ModelEdit';

const Model = (props) => {
  // let model = props.models[props.match.params.id -1];
  let model = props.models.filter(model => model.id == props.match.params.id)[0];

  return (
    <div>
      <h2>{model ? model.name : null} </h2>
      {model ? <img src={model.picture} alt={model.name}/> : null}
      <h3>Update Model:</h3>
      {model ? <ModelEdit model={model} /> : null}
      <BookingsContainer model={model} />
    </div>
  );
}

export default Model;