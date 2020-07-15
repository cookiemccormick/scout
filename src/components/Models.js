import React from 'react';
import { Route, Link } from 'react-router-dom';

const Models = (props) => {
  return (
    <div>
      <h2>Models</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Height</th>
              <th>Bust</th>
              <th>Waist</th>
              <th>Hip</th>
              <th>Shoe</th>
              <th>Eyes</th>
              <th>Hair</th>
            </tr>
          </thead>
          <tbody>
            {props.models.map(model =>
              <tr key={model.id}>
                <td><Link to={`/models/${model.id}`}>{model.name}</Link></td>
                <td>{model.picture ? <img src={model.picture} alt={model.name}/> : null}</td>
                <td>{model.height}</td>
                <td>{model.bust}</td>
                <td>{model.waist}</td>
                <td>{model.hip}</td>
                <td>{model.shoe}</td>
                <td>{model.eyes}</td>
                <td>{model.hair}</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}
export default Models;