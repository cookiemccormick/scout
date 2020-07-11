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

// model = Model.create!(
//   name: 'Ashley Novak',
//   pictures: '/images/ashleynovak.jpg',
//   height: 68,
//   bust: 34,
//   waist: 24,
//   hip: 35,
//   shoe: 8,
//   eyes: 'hazel',
//   hair: 'blond'