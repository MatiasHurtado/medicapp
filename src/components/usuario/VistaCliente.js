import React,{useState,useContext} from 'react';

import VerHorario from './VerHorarios';
import VerMedicos from './VerMedicos';
import VerAgenda from './VerAgenda';
import MedicoContext from '../../context/medico/medicoContext';



const VistaCliente =() => {

  //Obtener state de medico
  const medicoContext = useContext(MedicoContext)
  const {horariomedi} = medicoContext;

 
//  const verhorario =(id) =>{
//   const result = horarios.filter(horario => horario.idMedico === id);
//   guardarHorarioMed(result)
//   }
  return (


    <div className="Contenerdor sombra">
      <div className="cabecera">
        <div className="titulo sombra">
          <h1>Hola Cliente</h1>
        </div>
      </div>
      <div className="productos">
        <VerMedicos
        >
        </VerMedicos>
        {horariomedi.length === 0?(null):<VerHorario
        ></VerHorario>}
        
      <VerAgenda>
          
      </VerAgenda>
      </div>

     
    </div>
  );
}

export default VistaCliente;