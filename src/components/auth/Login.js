import React from 'react';
import styled from '@emotion/styled'

const ContenedorLogin = styled.div`
background-image: radial-gradient(circle at 62.28% 119.64%, #434863 0, #1f3159 50%, #001d4f 100%);
height: 1000px;
display: grid;
align-items: center;
`;

const LoginDiv = styled.div`
  background-image: linear-gradient(345deg, #00ffff 0, #21e0ff 25%, #3cb5f2 50%, #408cbb 75%, #3b6788 100%);
height: 400px;
width: 60%;
border-radius: 15%;
margin: 0 auto;
padding-top: 3em;
`

const Loginh1 = styled.h1`
font-size: 2em;
color: #ffffff;
width: 60%;
margin: 0 auto;
margin-bottom:1em;
`
const LoginForm = styled.div`
    width: 90%;
    margin: 0 auto;

    div > button{
        margin: 0 auto;
        


    }
    
`;


const Login = () => {
    return (
       <ContenedorLogin>
            <LoginDiv>
                <Loginh1>Iniciar Sesion</Loginh1>  
                <LoginForm>
                

                    <div class="field">
                        <label class="label">Correo</label>
                        <input class="input is-rounded " type="email" placeholder="Ingrese Su email" value=""/>
                    </div>

                    <div class="field">
                   
                        <label class="label">Password</label>
                        <input class="input  is-rounded" type="password" placeholder="Ingrese Su password" value=""/>
                     
                    </div>

                 
                    <div class="field">
                        <button class="button is-link is-medium is-rounded">Iniciar Sesion</button>
                    </div>
                
                    
                    </LoginForm>  
            </LoginDiv>
       </ContenedorLogin>
      );
}
 
export default Login;