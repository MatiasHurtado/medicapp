import React,{useState} from 'react';




function App() {
  const [horarios,guardarHorario] = useState([
    {Fecha:"20/02/2019",id:1 ,idMedico:3},
    {Fecha:"10/04/2019",id:1 ,idMedico:4},
    {Fecha:"30/03/2019",id:1 ,idMedico:5},
    {Fecha:"10/01/2019",id:1 ,idMedico:2},
    {Fecha:"20/02/2019",id:1 ,idMedico:1},
    {Fecha:"10/04/2019",id:1 ,idMedico:5},
    {Fecha:"30/03/2019",id:1 ,idMedico:6},
    {Fecha:"10/01/2019",id:1 ,idMedico:2},
    {Fecha:"20/02/2019",id:1 ,idMedico:6},
    
  ]);
  const [horariomedi,guardarHorarioMed] = useState([])
  const [medicos,guardarMedico] =useState([
    {id:1,nombre:"Marcelo Herrara", especialidad:"Ortodoncia"},
    {id:2,nombre:"Fernando Guitierrez", especialidad:"Ginecologo"},
    {id:3,nombre:"Luis Estrella", especialidad:"Dentista"},
    {id:4,nombre:"Thiare Zenteno", especialidad:"Cosmetologia"},
    {id:3,nombre:"Luis Estrella", especialidad:"Dentista"},
    {id:4,nombre:"Thiare Zenteno", especialidad:"Cosmetologia"},
    {id:3,nombre:"Luis Estrella", especialidad:"Dentista"},
    {id:4,nombre:"Thiare Zenteno", especialidad:"Cosmetologia"},
  
  ])

 const  {nombre,especialidad,id}= medicos

 const verhorario =(id) =>{
  const result = horarios.filter(horario => horario.idMedico === id);
  guardarHorarioMed(result)
  }
  return (


    <div className="Contenerdor">
      <div className="cabecera">
        <div className="titulo">
          <h1>Hola Cliente</h1>
        </div>
      </div>
      <div className="productos">
        {/* Medicos Disponibles */}
        <div className="producto med">
          <h3>Medicos Disponible</h3>

          <ul className="listados">
          {medicos.map(medico => (
                <li className="listado">
                <div class="box">
                  <p>Nombre: {medico.nombre} especialidad: {medico.especialidad}</p>
                  <button class="button is-primary is-small is-rounded"
                    onClick={()=>verhorario(medico.id)}
                  >Pedir Hora</button>
                </div>
              </li>
              ))}
            </ul>        
         </div>
        {/* Medicos Disponibles Fin*/}

        {/* Horario Disponible */}
        <div className="producto hor">
          <h3>Horario Disponible</h3>
          <ul className="listados">
              {horariomedi.map(hora => (
                <li className="listado">
                <div class="box">
                  <p>Fecha: {hora.Fecha} </p>
                  <button class="button is-primary is-small is-rounded">Pedir Hora</button>
                </div>
              </li>
              ))}
          </ul>
        </div>
        {/* Horario disponible Fin */}
      </div>
    </div>
  );
}

export default App;
