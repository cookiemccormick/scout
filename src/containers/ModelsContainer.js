import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchModels } from '../actions/fetchModels';
import Models from '../components/Models';
import Model from '../components/Model';
import ModelInput from '../components/ModelInput';

class ModelsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchModels();
  }

  render() {
    return (
      <div>
        <Route path='/models/new' component={ModelInput} />
        <Route path='/models/:id' render={(routerProps) => <Model {...routerProps} models={this.props.models} />} />
        <Route exact path='/models' render={(routerProps) => <Models {...routerProps} models={this.props.models} />} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    models: state.models
  }
}

export default connect(mapStateToProps, { fetchModels })(ModelsContainer);