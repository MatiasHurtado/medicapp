import React,{useState} from 'react';
import VerHorario from './components/VerHorarios';
import VerMedicos from './components/VerMedicos';

function App() {
  const [horarios,guardarHorario] = useState([
    {Fecha:"22/12/2019",id:1 ,idMedico:3},
    {Fecha:"10/08/2019",id:1 ,idMedico:2},
    {Fecha:"30/04/2019",id:1 ,idMedico:3},
    {Fecha:"14/02/2019",id:1 ,idMedico:2},
    {Fecha:"12/04/2019",id:1 ,idMedico:1},
    {Fecha:"15/06/2019",id:1 ,idMedico:4},
    {Fecha:"30/08/2019",id:1 ,idMedico:2},
    {Fecha:"19/02/2019",id:1 ,idMedico:2},
    {Fecha:"20/11/2019",id:1 ,idMedico:5},
    {Fecha:"17/10/2019",id:1 ,idMedico:4},
    {Fecha:"30/12/2019",id:1 ,idMedico:3},
    {Fecha:"16/09/2019",id:1 ,idMedico:2},
    {Fecha:"26/05/2019",id:1 ,idMedico:1},
    {Fecha:"10/05/2019",id:1 ,idMedico:1},
    {Fecha:"30/04/2019",id:1 ,idMedico:4},
    {Fecha:"15/02/2019",id:1 ,idMedico:2},
    {Fecha:"20/05/2019",id:1 ,idMedico:3},
    {Fecha:"13/03/2019",id:1 ,idMedico:4},
    {Fecha:"30/02/2019",id:1 ,idMedico:4},
    {Fecha:"13/05/2019",id:1 ,idMedico:2},
    {Fecha:"20/07/2019",id:1 ,idMedico:1},
    {Fecha:"10/08/2019",id:1 ,idMedico:2},
    {Fecha:"30/02/2019",id:1 ,idMedico:3},
    {Fecha:"10/11/2019",id:1 ,idMedico:2},
    {Fecha:"24/06/2019",id:1 ,idMedico:1},
    {Fecha:"10/04/2019",id:1 ,idMedico:4},
    {Fecha:"30/03/2019",id:1 ,idMedico:4},
    {Fecha:"10/04/2019",id:1 ,idMedico:2},
    {Fecha:"20/05/2019",id:1 ,idMedico:1},
    {Fecha:"10/04/2019",id:1 ,idMedico:3},
    {Fecha:"01/03/2019",id:1 ,idMedico:4},
    {Fecha:"11/01/2019",id:1 ,idMedico:2},
    {Fecha:"22/02/2019",id:1 ,idMedico:4},
    
  ]);
  const [horariomedi,guardarHorarioMed] = useState([])
  const [medicos,guardarMedico] =useState([
    {id:1,nombre:"Marcelo Herrara", especialidad:"Ortodoncia"},
    {id:2,nombre:"Fernando Guitierrez", especialidad:"Ginecologo"},
    {id:3,nombre:"Luis Estrella", especialidad:"Dentista"},
    {id:4,nombre:"Thiare Zenteno", especialidad:"Cosmetologia"},
  
  ])


 const verhorario =(id) =>{
  const result = horarios.filter(horario => horario.idMedico === id);
  guardarHorarioMed(result)
  }
  return (


    <div className="Contenerdor">
      <div className="cabecera">
        <div className="titulo sombra">
          <h1>Hola Cliente</h1>
        </div>
      </div>
      <div className="productos ">
        <VerMedicos
          medicos={medicos}
          verhorario={verhorario}
        >
        </VerMedicos>
        <VerHorario
          horariomedi={horariomedi}
        ></VerHorario>
      </div>
    </div>
  );
}

export default App;
