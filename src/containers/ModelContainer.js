import React from 'react';
import { connect } from 'react-redux';

import BookingsContainer from './BookingsContainer';
import ModelEdit from '../components/ModelEdit';
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
        <img src={model.picture} alt={model.name} className='model-picture-large'/><br/><br/>
        <ModelEdit model={model} />
        <BookingsContainer model={model} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    model: state.model
  };
}

export default connect(mapStateToProps, { fetchModel })(ModelContainer);