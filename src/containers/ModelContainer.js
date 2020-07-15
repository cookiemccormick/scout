import React from 'react';
import BookingsContainer from './BookingsContainer';
import ModelEdit from '../components/ModelEdit';
import { connect } from 'react-redux';
import { fetchModel } from '../actions/fetchModel';

class ModelContainer extends React.Component {
  componentDidMount() {
    this.props.fetchModel(this.props.match.params.id);
  }

  render() {
    const model = this.props.model;

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

const mapStateToProps = state => {
  return {
    model: state.model
  }
}

export default connect(mapStateToProps, { fetchModel })(ModelContainer);