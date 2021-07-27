import react from "react";
import styled from 'styled-components'







const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #DDDDDD;
  height: 92.88vh;
    
`
const StyledH3 = styled.h3`
  margin: 10vh auto 0;
`
const StyledCenterDiv = styled.div`
  display: flex;
  width: 100vw;
  
  /* margin: 30vh auto 0; */
  
  text-align: center;
  padding: 3%;
  background-color: #DDDDDD;
`
const LinkDiv = styled.div`
`

export default function Landin (props) {
    
    return(
        <StyledApp>
        
            <StyledCenterDiv>
                <StyledH3>Welcolme to anywhere fitness!</StyledH3>
                
                <div></div>
            </StyledCenterDiv>
                <a href="/login">
                    <div>
                        <h3>Login</h3>
                    </div>
                </a>
                <a href="/signup">
                    <div>
                        <h3>Sign Up</h3>
                    </div>
                </a>
        </StyledApp>
    )
}
