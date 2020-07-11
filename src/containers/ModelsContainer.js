import React from 'react';
import { connect } from 'react-redux';
import Models from '../components/Models';
import ModelInput from '../components/ModelInput';

class ModelsContainer extends React.Component {
  render() {
    return (
      <div>
        <ModelInput />
        <Models />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return (
    models: state.models
  );
}

export default connect(mapStateToProps)(ModelsContainer);