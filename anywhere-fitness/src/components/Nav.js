import react from "react";
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Landing from './Landing'



const StyledNav = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: 0 5%;
    align-items: center;
    ul{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        text-decoration: none;
        li{
            margin: 0 3%;
        }
        a{
            white-space: nowrap;
            text-decoration: none;
            color: inherit;
        }
    }
   
`

export default function f (props){
    
    return(
        <StyledNav>
            
                <h1>anywhere fitness.</h1>
                <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign-Up</Link>
                    </li>
                    </ul> 
                </nav>
                
                
            
        </StyledNav>
    )
}

