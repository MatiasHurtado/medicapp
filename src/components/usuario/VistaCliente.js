import React,{useState,useContext, useEffect} from 'react';

import VerHorario from './VerHorarios';
import VerMedicos from './VerMedicos';
import VerAgenda from './VerAgenda';
import MedicoContext from '../../context/medico/medicoContext';
import AuthContext from '../../context/autenticacion/authContext';



const VistaCliente =() => {

  //Obtener state de medico
  const medicoContext = useContext(MedicoContext)
  const {horariomedi} = medicoContext;


  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const {cliente,usuarioAutenticado,cerrarSesion}= authContext;


  useEffect(()=>{

    usuarioAutenticado();
  },[] ) 
//  const verhorario =(id) =>{
//   const result = horarios.filter(horario => horario.idMedico === id);
//   guardarHorarioMed(result)
//   }

  
  return (


    <div className="Contenerdor sombra">
      <div className="cabecera">
        <div className="titulo sombra">
          {cliente?<h1>Hola {cliente.nombre} </h1>:null } 

          <button class="button is-danger is-small is-rounded"
            onClick={()=>cerrarSesion()}
          >CERRAR SESION</button>

        </div>
      </div>
      <div className="productos">
        <VerMedicos
        >
        </VerMedicos>
        <VerHorario
        ></VerHorario>
        
      <VerAgenda>
          
      </VerAgenda>
      </div>

     
    </div>
  );
}

export default VistaCliente;