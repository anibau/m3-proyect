import PropTypes from 'prop-types'

const TurnoC= ({date, time, status, pet, service})=> {
const statusClass= status==='active'? 'statusActive': 'statusCancelled';
const statusBtn= status=== 'cancelled'? 'btnCancelled': 'btnTurn';

  return (
    <section className='cardTurno'>
      <h3 className='titleCardTurn'>Appointment</h3>
      <div className='divTurn'>
        <p className='textTurn'><b>Date:</b> {date}</p>
        <p className='textTurn'><b>Time:</b> {time}</p>
        {/* <p className='textTurn'><b>User:</b> {userId}</p> */}
        <p className='textTurn'><b>Status: </b><span className={`${statusClass}`}>{status}</span></p>
        <p className='textTurn'><b>Pet:</b> {pet}</p>
        <p className='textTurn'><b>Service:</b> {service}</p>
      </div>
      <button className= {`${statusBtn}`} disabled={status==='cancelled'}>Cancelled</button>
    </section>
  )
};
TurnoC.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  // userId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  pet: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired
}


export default TurnoC;
