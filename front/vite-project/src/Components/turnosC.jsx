import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AppointmentContext } from '../Context/Appointment';

const TurnoC= ({date, time, id, pet, namePet, agePet, weigthPet, service})=> {
  const{userAppointments, setUserAppointments}= useContext(AppointmentContext);
  //encontrar el turno actual y renderizar su status
  const turnoActual= userAppointments.find((turno)=>turno.id=== id);
  const statusClass= turnoActual?.status==='active'? 'statusActive': 'statusCancelled';
  const [alertCancel, setAlertCancel ]=useState(false);
  
  // Convertir fecha de la reserva y fecha actual a objetos Date
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const [year, month, day] = date.split('-').map(Number);
  const appointmentDate = new Date(year, month - 1, day);
  // Validar si el turno puede ser cancelado
  //appointmentDate.setDate(appointmentDate.getDate() - 1);
  //desabilitar el boton
 const isDisabled= turnoActual.status==='cancelled' || (appointmentDate< currentDate);
  
  const HandleButton=(event)=>{
    event.preventDefault();

    if (appointmentDate <= currentDate ) {
      alert('💥💥 El turno no puede ser cancelado, revise las condiciones de reserva');
      return;
    }
    setAlertCancel(true);
  }
    const confirmCancel= ()=>{

      //PETICION CANCELAR TURNO
      axios.put(`http://localhost:3000/appointments/cancel/${id}`)
      .then(()=>{
        //actualizar el estado
        const updateAppointment= userAppointments.map((appointment)=>
          appointment.id===id?{...appointment, status: 'cancelled'}: appointment
      );
      setUserAppointments(updateAppointment);
      setAlertCancel(false)
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
      <button className='btnTurn' disabled={isDisabled} >Cancelled</button>
      {alertCancel && <div className='alertCancel'>¿Seguro que desea cancelar su turno? <br/> <button onClick={confirmCancel} className='btnAlert'>Si, cancelar</button> <button onClick={()=>{setAlertCancel(false)}} className='btnAlert'>No cancelar</button></div>}
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
