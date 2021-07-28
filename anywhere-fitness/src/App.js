import logo from './logo.svg';
import './App.css';

import styled from 'styled-components'
import axios from 'axios'
import React, {useState, useEffect} from "react";
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Nav from './components/Nav'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import Class from './components/Class'
import SearchBar from './components/SearchBar'

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
    
`

  const iniClasses = []
  const url = 'https://anywhere-fitness-4u.herokuapp.com/api/'
function App() {
const [classes,setClasses] = useState(iniClasses)
const {search} = window.location
const query = new URLSearchParams(search).get('s')
const filterClasses = (classes, query) => {
  if(!query) {
    return classes;
  }
  return classes.filter((cl) => {
    const className = cl.name.toLowerCase();
    return className.includes(query);
  })
}
const [searchQuery, setSearchQuery] = useState(query || '')
const filteredClasses = filterClasses(classes, searchQuery)
  const getClass = () => {
    axios.get(`${url}classes`)
    .then(res => {
      setClasses(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  useEffect(() => {
    getClass()
  },[])

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
        <Route path="/search">
        <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      {filteredClasses.map(cl => {
        return(
          <Class key={cl.id} details={cl}/>
        )
      })}
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default App;
