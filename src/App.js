import React from 'react';
import { connect } from 'react-redux';
import ModelsContainer from './containers/ModelsContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ModelsContainer />
      </div>
    );
  }
}

export default connect()(App);