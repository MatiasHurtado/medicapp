import React, { useContext } from "react";
import ClienteContext from "../../context/cliente/clienteContext";
import AuthContext from "../../context/autenticacion/authContext";
const VerAgenda = () => {
  const clienteContext = useContext(ClienteContext);
  const { agenda, obtenerAgedaCliente,eliminarHora } = clienteContext;

  const authContext = useContext(AuthContext);
  const { cliente } = authContext;



 
  
 
  const onClick= (hora)=>{
    
    hora.estado=false;

    eliminarHora(hora)
    setTimeout(() => {
      obtenerAgedaCliente(cliente)
    }, 500);
   
  
 }
  
  
  return (
    <div className="producto agen">
      <h3>Mi Agenda</h3>

      {agenda.length === 0 ? (
        <ul className="listados ">
          <button
            className="button is-success is-medium"
            onClick={() => obtenerAgedaCliente(cliente)}
          >
            Ver mi agenda
          </button>
        </ul>
      ) : (
   

        <ul className="listados">
          <table className="table">
            <thead>
              <tr className="is-selected">
              <th>
                  <abbr title="Position">#</abbr>
                </th>
                <th>
                  <abbr title="Position">Nombre Medico</abbr>
                </th>
                <th>
                  <abbr title="Played">Especialidad</abbr>
                </th>
                <th>
                  <abbr title="Played">Fecha</abbr>
                </th>
                <th>
                  <abbr title="Played">Accion</abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              {agenda.map((hora,i) => (
                
                <tr>
                  <td>{i+=1}</td>
                  <td>{hora.medico.nombre}</td>
                  <td>{hora.medico.especialidad}</td>
                  <td>{hora.fecha}</td>
                  <td><button className="button is-info "
                    onClick={()=>onClick(hora)}
                    >Eliminar hora</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      )}
    </div>
  );
};
export default VerAgenda;
