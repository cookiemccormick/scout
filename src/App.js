import React from 'react';
import ModelInput from './components/ModelInput';
import ModelContainer from './containers/ModelContainer';
import ModelsContainer from './containers/ModelsContainer';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/models/new' component={ModelInput} />
          <Route path='/models/:id' component={ModelContainer} />
          <Route path='/models' component={ModelsContainer} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;