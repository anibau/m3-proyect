import { useState, useContext, useEffect } from 'react'
import '../agregarTurno/agregarTurno.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { UsersContext } from '../../Context/Users';
import { validateTurns } from '../../Helpers/validateTurns';

const AgregarTurnos=()=>{
    const navigate= useNavigate();
    const{user}= useContext(UsersContext);
    const userData= user;
    const userId= userData.id;
    const [dataAppoint, setDataAppoint]=useState({
        date: '',
        time: '',
        userId: userId,
        status: 'active',
        pet: '',
        namePet: '',
        agePet: '',
        weigthPet: '',
        service: ''
    });
    const[exit, setExit]=useState('');
    const [turns, setTurns]= useState(false);
    const [errorData, setErrorData]=useState({
        date:'',
        time:''
    });
    useEffect(()=>{
        !user.name && navigate('/')
    },[navigate, user])

    const handleInput=(event)=>{
        const{name, value}=event.target;          
        const updateData= {...dataAppoint, [name]: value};
        setDataAppoint(updateData);
        const validateData= validateTurns(updateData);
        console.log(validateData);
        setErrorData(validateData);
        setExit('');
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        setExit('');
        axios.post('http://localhost:3000/appointments/schedule', dataAppoint)
        .then(()=>{
            setExit('RESERVA DE TURNO EXITOSO');
            setDataAppoint({
                date: '',
                 time: '',
                 userId: userId,
                status: 'active',
                 pet: '',
                namePet: '',
                agePet: '',
                weigthPet: '',
                service: ''
            });
            setTurns(true);

        })
        .catch((error)=>{
            console.log(error);
            setExit('ERROR AL CREAR TURNO')
        })    
    };
    console.log(dataAppoint)
    const isDisabled= !dataAppoint.date || !dataAppoint.time ||!dataAppoint.pet || !dataAppoint.namePet || !dataAppoint.agePet || !dataAppoint.weigthPet || !dataAppoint.service || errorData.date || errorData.time || errorData.agePet || errorData.weigthPet;

    return(<>
    <div className="divAddTurn">
        <h3>SEPARA TU CITA PARA TU ENGREIDO PELUDO</h3>
        <div className='textTime'>Complete el siguiente formulario para reservar un turno de nuestros servicios. <ul>CONDICIONES:
            <li><b>Recuerde que el horario de atencion es de 09:00 a 17:00 de Lunes a Viernes</b></li>
            <li><b>Los turnos pueden ser CANCELADOS hasta el dia anterior de la reserva</b></li>
            </ul></div>
        <form className="formAddTurn" onSubmit={handleSubmit}>
            <label>Fecha: <input type="date" name='date' value={dataAppoint.date} onChange={handleInput} required/></label>
            {errorData.date &&<p style={{color:'red', backgroundColor:'pink', padding:'5px'}}><b>📢 {errorData.date}</b></p> }
            <label>Hora:<input type="time" name='time' value={dataAppoint.time} onChange={handleInput} step="1800" required /></label>
            {errorData.time && <p style={{color:'red', backgroundColor:'pink', padding:'5px'}}><b>📢 {errorData.time}</b></p>}
            <div className='divDataPet'>
            <h6>DATOS DE MASCOTA </h6>
            <div className='divLabelPet'> 
            <label>Especie:
            <select name="pet" value={dataAppoint.pet} onChange={handleInput} required>
                <option value=""  disabled>selecciona una especie</option>
                <option value="perro">perro</option>
                <option value="gato">gato</option>
            </select> </label>
            <label> Nombre de mascota: <input type="text" name='namePet' maxLength={20} value={dataAppoint.namePet} onChange={handleInput} required /></label>
            <label> Edad de mascota: <input type="number" name='agePet' min={1}  value={dataAppoint.agePet} onChange={handleInput} required/>años</label>
            {errorData.agePet && <p style={{color:'red', backgroundColor:'pink', padding:'5px'}}><b>📢 {errorData.agePet}</b></p>}
            <label> Peso de mascota: <input type="number" name='weigthPet' min={1} value={dataAppoint.weigthPet} onChange={handleInput} required/>kg</label>
            {errorData.weigthPet && <p style={{color:'red', backgroundColor:'pink', padding:'5px'}}><b>📢 {errorData.weigthPet}</b></p>}
            </div>
            </div>
            <label className='labelService'>Servicio:
                <select name="service" value={dataAppoint.service} onChange={handleInput} required>
                    <option  value='' disabled>selecciona un servicio</option>
                    <option value="baño">BAÑO</option>
                    <option value="peluqueria">PELUQUERIA</option>
                </select>
            </label>
            {user.length!==0 &&<button disabled={isDisabled}>AGREGAR TURNO</button>}
            
        {exit==='RESERVA DE TURNO EXITOSO'&& <p style={{color:'green', border:'2px solid green', padding: '5px', margin: '5px'}}>{exit}</p>}
        {exit==='ERROR AL CREAR TURNO'&& <p style={{color:'red', border:'2px solid red', padding: '5px', margin:'5px'}}>{exit}</p>}
        </form>
        {turns&&<Link to={`/appointments/${userId}`} className='btnTurnos'>VER TODOS MIS TURNOS</Link> }
    </div>
    </>)
}
export default AgregarTurnos
 