import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/register" component={ register } />
    </Switch>
  );
}

export default App;
