import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchModels } from '../actions/fetchModels';
import Models from '../components/Models';
import ModelContainer from './ModelContainer';
import ModelInput from '../components/ModelInput';
import Home from '../components/Home';

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.fetchModels();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    models: state.models
  }
}

export default connect(mapStateToProps, { fetchModels })(AppContainer);