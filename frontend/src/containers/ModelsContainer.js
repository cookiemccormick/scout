import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import { fetchModels } from '../actions/fetchModels';
import { deleteModel } from '../actions/deleteModel';

class ModelsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchModels();
  }

  render() {
    const models = this.props.models;

    const handleDelete = (model) => {
      this.props.deleteModel(model.id);
    }

    if (!models) {
      return null;
    }

    return (
      <div>
        <h2>Models</h2>
          <Table>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.models.map(model =>
                <tr key={model.id}>
                  <td><Link to={`/models/${model.id}`}>{model.name}</Link></td>
                  <td>{model.picture ? <img src={model.picture} alt={model.name} className='model-picture'/> : null}</td>
                  <td>{model.height}</td>
                  <td>{model.bust}</td>
                  <td>{model.waist}</td>
                  <td>{model.hip}</td>
                  <td>{model.shoe}</td>
                  <td>{model.eyes}</td>
                  <td>{model.hair}</td>
                  <td><button onClick={() => handleDelete(model)}>Delete</button></td>
                </tr>
              )}
            </tbody>
          </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    models: state.models
  };
}

export default connect(mapStateToProps, { fetchModels, deleteModel })(ModelsContainer);