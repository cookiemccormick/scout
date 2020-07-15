import React from 'react';
import { connect } from 'react-redux';
import { editModel } from '../actions/editModel';
import ModelForm from './ModelForm';

class ModelEdit extends React.Component {
  handleOnSubmit = (formData, model) => {
    this.props.editModel(formData, model);
  }

  render() {
    return (
      <div>
        <h2>Edit Model:</h2>
        <ModelForm onSubmit={this.handleOnSubmit} model={this.props.model} />
      </div>
    );
  }
}

export default connect(null, { editModel })(ModelEdit);