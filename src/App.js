import React from 'react';
import AppContainer from './containers/AppContainer';
import ModelInput from './components/ModelInput';
import ModelContainer from './containers/ModelContainer';
import Models from './components/Models';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/models/new' component={ModelInput} />
          <Route path='/models/:id' component={ModelContainer} />
          <Route path='/models' component={Models} />
          <Route path='/' component={Home} />
        </Switch>
        <AppContainer />
      </div>
    );
  }
}

export default App;