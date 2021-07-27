import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Login from './components/Login'

import SignUp from './components/SignUp'


function App() {
  return (
    <div className="div">
 
      <SignUp/>
      <Login/>
    </div>
  );
}

export default App;
