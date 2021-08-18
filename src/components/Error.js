import React from 'react';
import styled from '@emotion/styled'


const DivError =styled.div`
background: #ff9395;
color: #ffffff;
width: 30%;
border-radius: 25%;
margin: 0 auto;
@media (max-width: 900px) {

    width: 60%;
}

`

const Error = (props) => {


    return ( 
        <DivError className="notification is-danger">
            <p>{props.mensaje}</p>
        </DivError>
     );
}
 
export default Error;