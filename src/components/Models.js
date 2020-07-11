import React from 'react';
import Model from './Model';

const Models = (props) => {
  return (
    <div>
      {props.models.map(model =>
        <div key={model.id}><Model model={model}/></div>)}
    </div>
  );
}

export default Models;