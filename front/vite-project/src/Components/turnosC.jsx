import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppointmentContext } from '../Context/Appointment';


const TurnoC= ({date, time, id, pet, namePet, agePet, weigthPet, service})=> {
  const{appointments, setAppointments}= useContext(AppointmentContext);
  //encontrar el turno actual y renderizar su status
  const turnoActual= appointments.find((turno)=>turno.id=== id);
  const statusClass= turnoActual?.status==='active'? 'statusActive': 'statusCancelled';
  const statusBtn= turnoActual?.status=== 'cancelled'? 'btnCancelled': 'btnTurn';
  
  const HandleButton=(event)=>{
    event.preventDefault();

    axios.put(`http://localhost:3000/appointments/cancel/${id}`)
    .then(()=>{
      //actualizar el estado
      const updateAppointment= appointments.map((appointment)=>
        appointment.id===id?{...appointment, status: 'cancelled'}: appointment
      );
      setAppointments(updateAppointment);
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <form onSubmit={HandleButton} className='cardTurno'>
      <h3 className='titleCardTurn'>Appointment</h3>
      <div className='divTurn'>
        <p className='textTurn'><b>Fecha:</b> {date}</p>
        <p className='textTurn'><b>Horario:</b> {time}</p>
        <p className='textTurn'><b>Estado: </b><span className={`${statusClass}`}>{turnoActual?.status}</span></p>
        <p className='textTurn'><b>Mascota:</b> {pet}
        <li className='textTurn'><b>Nombre:</b> {namePet}</li>
        <li className='textTurn'><b>Edad:</b> {agePet}</li>
        <li className='textTurn'><b>Peso:</b> {weigthPet}</li>
        <li className='textTurn'><b>Servicio:</b> {service}</li>
        </p>
      </div>
      <button className= {`${statusBtn}`} disabled={turnoActual.status==='cancelled'} type='submit'>Cancelled</button>
    </form>
  )
};
TurnoC.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  pet: PropTypes.string.isRequired,
  namePet: PropTypes.string.isRequired,
  agePet: PropTypes.string.isRequired,
  weigthPet: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired
}


export default TurnoC;
