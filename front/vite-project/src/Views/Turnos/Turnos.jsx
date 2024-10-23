import TurnosC from "../../Components/turnosC";
import { useState , useEffect} from "react";
// import turnosDatos from "../../Helpers/turnos";
import 'bootstrap/dist/css/bootstrap.min.css';
import  axios from 'axios';
import './turnos.css'


const Turnos =()=>{
    const [turnShow, setTurnShow]= useState([]);
    console.log(turnShow);

    useEffect(()=>{
      axios.get('http://localhost:3000/appointments')
      .then((res)=>setTurnShow(res.data))
    },[])

    return (<>
    <div className="turnContainer">
      <h1 className="titleTurn">MIS TURNOS PETSPA</h1>
      <h4>Estos son los turnos del usuario</h4>
      <div className="cardListTurn">
        {
            turnShow.map((turn)=> {return <TurnosC key={turn.id} date={turn.date} time={turn.time} userId={turn.userId} status={turn.status} pet={turn.pet} service={turn.service} />})
        }
      </div>
    </div>  
    </>)
}
export default Turnos