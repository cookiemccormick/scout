import React from 'react';
// import { Redirect } from 'react-router-dom';
import BookingsContainer from '../containers/BookingsContainer';
import ModelEdit from './ModelEdit';

const Model = (props) => {
  // let model = props.models[props.match.params.id -1];
  let model = props.models.filter(model => model.id == props.match.params.id)[0];

  return (
    <div>
      <h2>{model ? model.name : null}</h2>
      <h3>
        {model ? model.picture : null} -
        {model ? model.height : null} -
        {model ? model.bust : null} -
        {model ? model.waist : null} -
        {model ? model.hip : null} -
        {model ? model.shoe : null} -
        {model ? model.eyes : null} -
        {model ? model.hair : null}
      </h3>
      <BookingsContainer model={model} />
      {model ? <ModelEdit model={model} /> : null}
    </div>
  );
}

export default Model;