import React from 'react';

const Model = (props) => {
  return (
    <li>
      {props.model.name} -
      {props.model.picture} -
      {props.model.height} -
      {props.model.bust} -
      {props.model.waist} -
      {props.model.hip} -
      {props.model.shoe} -
      {props.model.eyes} -
      {props.model.hair}
    </li>
  );
}

export default Model;