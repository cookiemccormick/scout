import React from 'react';
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

export default ModelsContainer;