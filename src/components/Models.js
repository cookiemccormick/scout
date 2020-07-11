import React from 'react';

const Models = (props) => {
  return (
    <div>
      {props.models.map(model =>
        <li key={model.id}>
          {model.name} -
          {model.pictures} -
          {model.height} -
          {model.bust} -
          {model.waist} -
          {model.hip} -
          {model.shoe} -
          {model.eyes} -
          {model.hair}
        </li>)}
    </div>
  );
}

export default Models;