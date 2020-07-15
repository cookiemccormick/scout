import React from 'react';
import { connect } from 'react-redux';
import { addModel } from '../actions/addModel';
import ModelForm from './ModelForm';

class ModelInput extends React.Component {
  handleOnSubmit = (formData, model) => {
    this.props.addModel(formData, model);
  }

  render() {
    return (
      <ModelForm onSubmit={this.handleOnSubmit} model={{}} />
    );
  }
}

export default connect(null, { addModel })(ModelInput);