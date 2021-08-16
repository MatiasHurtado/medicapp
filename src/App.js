import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import VistaCliente from './components/usuario/VistaCliente';
import ClienteState from './context/cliente/clienteState';
import MedicoState from './context/medico/medicoState';
import NuevaCuenta from './components/auth/NuevaCuenta';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';
function App() {


  //Revisamos si tenemos un token
  const token = localStorage.getItem('token')
  if(token){
    tokenAuth(token);
  }
  return (
    <MedicoState>
      <ClienteState>
      <AuthState>
        <Router>
        <Switch>
          <RutaPrivada exact path="/Agenda" component={VistaCliente}/>
          <Route exact path="/" component={Login}/>
          <Route exact path="/Registro" component={NuevaCuenta}/>
        </Switch>
      </Router>
      </AuthState>
      </ClienteState>
    </MedicoState>
    
  
  );
}

export default App;
