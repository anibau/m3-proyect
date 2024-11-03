import { useState, useContext } from 'react'
import '../agregarTurno/agregarTurno.css'
import axios from 'axios';
import { Link } from "react-router-dom";
import { UsersContext } from '../../Context/Users';

const AgregarTurnos=()=>{
    const{users}= useContext(UsersContext);
    const user= users;
    const userId= user.id;
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

    const handleInput=(event)=>{
        const{name, value}=event.target;
        setDataAppoint((prevData)=>({...prevData, [name]: value}));
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

    return(<>
    <div className="divAddTurn">
        <h3>SEPARA TU CITA PARA TU ENGREIDO PELUDO</h3>
        <form className="formAddTurn" onSubmit={handleSubmit}>
            <label>Fecha: <input type="date" name='date' value={dataAppoint.date} onChange={handleInput} required/></label>
            <label>Hora:<input type="time" name='time' value={dataAppoint.time} onChange={handleInput}  required /></label>
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
            <label> Edad de mascota: <input type="number" name='agePet' min={1} max={30} value={dataAppoint.agePet} onChange={handleInput} required/>años</label>
            <label> Peso de mascota: <input type="number" name='weigthPet' min={1} max={100} value={dataAppoint.weigthPet} onChange={handleInput} required/>kg</label>
            </div>
            </div>
            <label className='labelService'>Servicio:
                <select name="service" value={dataAppoint.service} onChange={handleInput} required>
                    <option  value='' disabled>selecciona un servicio</option>
                    <option value="baño">BAÑO</option>
                    <option value="peluqueria">PELUQUERIA</option>
                </select>
            </label>
            {users.length!==0 &&<button>AGREGAR TURNO</button>}
            
        {exit==='RESERVA DE TURNO EXITOSO'&& <p style={{color:'green', border:'2px solid green', padding: '5px', margin: '5px'}}>{exit}</p>}
        {exit==='ERROR AL CREAR TURNO'&& <p style={{color:'red', border:'2px solid red', padding: '5px', margin:'5px'}}>{exit}</p>}
        </form>
        {turns&&<Link to={`/appointments/${userId}`} className='btnTurnos'>VER TODOS MIS TURNOS</Link> }
    </div>
    </>)
}
export default AgregarTurnos