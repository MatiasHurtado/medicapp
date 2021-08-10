import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Clien from './components/usuario/clien';
import VistaCliente from './components/usuario/VistaCliente';
import ClienteState from './context/cliente/clienteState';
import MedicoState from './context/medico/medicoState';

function App() {

  return (
    <MedicoState>
      <ClienteState>
        <Router>
        <Switch>
          <Route exact path="/" component={VistaCliente}/>
          <Route exact path="/a" component={Clien}/>
        </Switch>
      </Router>
      </ClienteState>
    </MedicoState>
    
  
  );
}

export default App;
