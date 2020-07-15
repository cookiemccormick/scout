import React from 'react';
// import { Redirect } from 'react-router-dom';
import BookingsContainer from './BookingsContainer';
import ModelEdit from '../components/ModelEdit';

class ModelContainer extends React.Component {
  state = {
    model: null
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/models/${this.props.match.params.id}.json`)
      .then(response => response.json())
      .then(json => this.setState({ model: json }))
  }

  render() {
    const model = this.state.model;

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
}

export default ModelContainer;