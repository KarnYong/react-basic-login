import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';

function getToken() {
  const token = localStorage.getItem('accessToken');
  return token;
}

function App() {
  const token = getToken();

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Profile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
