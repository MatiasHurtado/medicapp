import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import VistaCliente from './components/usuario/VistaCliente';
import ClienteState from './context/cliente/clienteState';
import MedicoState from './context/medico/medicoState';

function App() {

  return (
    <MedicoState>
      <ClienteState>
        <Router>
        <Switch>
          <Route exact path="/Agenda" component={VistaCliente}/>
          <Route exact path="/" component={Login}/>
        </Switch>
      </Router>
      </ClienteState>
    </MedicoState>
    
  
  );
}

export default App;
