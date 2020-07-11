import React from 'react';

const Model = (props) => {
  let model = props.models[props.match.params.id -1];

  return (
    <h2>{model ? model.name : null}
      {model ? model.picture : null} -
      {model ? model.height : null} -
      {model ? model.bust : null} -
      {model ? model.waist : null} -
      {model ? model.hip : null} -
      {model ? model.shoe : null} -
      {model ? model.eyes : null} -
      {model ? model.hair : null}
    </h2>
  );
}

export default Model;