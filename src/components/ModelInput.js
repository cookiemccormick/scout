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
      <div>
        <h2>Create Model:</h2>
        <ModelForm onSubmit={this.handleOnSubmit} model={{}} />
      </div>
    );
  }
}

export default connect(null, { addModel })(ModelInput);