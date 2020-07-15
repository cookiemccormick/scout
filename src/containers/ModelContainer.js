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

    if (!model) {
      return null;
    }

    return (
      <div>
        <h2>{model.name} </h2>
        <img src={model.picture} alt={model.name}/>
        <h3>Update Model:</h3>
        <ModelEdit model={model} />
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