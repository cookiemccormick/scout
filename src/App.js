import React from 'react';
import ModelInput from './components/ModelInput';
import ModelContainer from './containers/ModelContainer';
import ModelsContainer from './containers/ModelsContainer';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Scout</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/models">Models</Nav.Link>
              <Nav.Link href="/models/new">Create Model</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Switch>
            <Route path='/models/new' component={ModelInput} />
            <Route path='/models/:id' component={ModelContainer} />
            <Route path='/models' component={ModelsContainer} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;