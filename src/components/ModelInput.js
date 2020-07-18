import React from 'react';
import { connect } from 'react-redux';
import { addModel } from '../actions/addModel';
import ModelForm from './ModelForm';
import { Redirect } from 'react-router-dom';

class ModelInput extends React.Component {
  handleOnSubmit = (formData, model) => {
    this.props.addModel(formData, model);
  }

  render() {
    if (this.props.model) return <Redirect to={`/models/${this.props.model.id}`}/>;
    return (
      <div>
        <h4>Create Model:</h4>
        <ModelForm onSubmit={this.handleOnSubmit} model={{}} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    model: state.model
  }
}

export default connect(mapStateToProps, { addModel })(ModelInput);