import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addModel } from '../actions/addModel';
import ModelForm from './ModelForm';

class ModelInput extends React.Component {
  handleOnSubmit = (formData, model) => {
    this.props.addModel(formData, model);
  }

  render() {
    //after model is created, redirect to model show page
    if (this.props.model) {
      return <Redirect to={`/models/${this.props.model.id}`}/>;
    }

    return (
      <div>
        <h4>Create Model:</h4>
        <ModelForm onSubmit={this.handleOnSubmit} model={{}} />
      </div>
    );
  }
}

//map the application state/reducer
const mapStateToProps = state => {
  return {
    model: state.model
  };
}

export default connect(mapStateToProps, { addModel })(ModelInput);