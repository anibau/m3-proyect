import TurnosC from "../../Components/turnosC";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './turnos.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../../Context/Users";
import { AppointmentContext } from "../../Context/Appointment";


const Turnos = () => {
  const[contact, setContact]=useState('');
  const [turnShow, setTurnShow] = useState([]);
  const {user}= useContext(UsersContext);
  const{userAppointments, setUserAppointments}= useContext(AppointmentContext);
  const userId= user?.id;
  
  useEffect(() => {
    if(userId){
      axios.get(`http://localhost:3000/users/${userId}`)
      
      .then((res) => {const data= res.data;
        const nombre= data.name;
        setContact(nombre);
        const dataApointment= data.appointments;
        setTurnShow(dataApointment);
        setUserAppointments(dataApointment);
      })
      .catch((error) => {
        console.log(`error: ${error}`)
      })
    }
  }, [userId, setUserAppointments]);
  console.log(userAppointments)

  return (
    <div className="turnContainer">
      <h1 className="titleTurn">BIENVENID@ A PETSPA: <span className="userTurn">{contact}</span></h1>
      <h4>Este es el historial de tus turnos </h4>
      <div className="cardListTurn">
        {turnShow.length===0 && <p style={{padding:'10px', fontSize:'1.5rem'}}>Aun no tiene turnos agendados 😌</p> }
        {
          turnShow.map((turn) => {
            return <TurnosC key={turn.id} date={turn.date} time={turn.time} status={turn.status} pet={turn.pet} namePet={turn.namePet} agePet={turn.agePet} weigthPet={turn.weigthPet} service={turn.service} id={turn.id}/>
          })
        }
      </div>
      {user.length!==0 && <Link className="btnAddTurn" to={`/appointments/add/${userId}`} >AGENDAR NUEVO TURNO</Link>}
      
    </div>)
}
export default Turnos