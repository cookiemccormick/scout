import React from 'react';
import { Route, Link } from 'react-router-dom';
import Model from './Model';

const Models = (props) => {
  return (
    <div>
      {props.models.map(model =>
        <li key={model.id}>
          <Link to={`/models/${model.id}`}>{model.name}</Link>
        </li>)}
    </div>
  );
}

export default Models;