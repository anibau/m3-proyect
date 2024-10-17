import TurnosC from "../../Components/turnosC";
import { useState } from "react";
import turnosDatos from "../../Helpers/turnos";
import 'bootstrap/dist/css/bootstrap.min.css';


const Turnos =()=>{
    const [turnShow]= useState(turnosDatos);
    console.log(turnShow);

    return (<>
    <div className="turnContainer">
      <h1 className="titleTurn">Lista de TURNOS PETSPA</h1>
      <div className="cardListTurn">
        {
            turnShow.map((turn)=> {return <TurnosC key={turn.userId} date={turn.date} time={turn.time} userId={turn.userId} status={turn.status} pet={turn.pet} service={turn.service} />})
        }
      </div>
    </div>  
    </>)
}
export default Turnos