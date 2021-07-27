import logo from './logo.svg';
import './App.css';

import styled from 'styled-components'

import React, {useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'
import Landing from './components/Landing'

import SignUp from './components/SignUp'

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
    
`

function App() {
  return (
    <StyledApp>
      
      <Nav/>
      
      <Switch>
        <Route exact path="/">
          <Landing/>              
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default App;
