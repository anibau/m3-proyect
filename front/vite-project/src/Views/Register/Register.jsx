import { useState } from "react"
import {validate} from '../../Helpers/validate'
import './register.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Register= ()=>{
    const [dataRegister, setDataRegister]= useState({
        name: '',
        lastName: '',
        email: '',
        birthdate: '',
        nDni: '',
        telefono: '',
        username: '',
        password: '',
        password2: ''
    });

    const[error, setError]= useState({
        name: 'nombre es requerido',
        lastName: 'apellido es requerido',
        email: 'email es requerido',
        birthdate: 'birthdate es requerido',
        nDni: 'dni es requerido',
        telefono: 'telefono es requerido',
        username: 'username es requerido',
        password: 'password es requerido (MIN 8 caracteres)',
        password2: 'password es requerido'
    });
    const [submit, setSubmit]=useState(false);
    const [exit, setExit]= useState('');
    const navigate= useNavigate();

    const HandleInput=(event)=>{
        const{name, value}= event.target;
        const updateData= {...dataRegister, [name]: value};
        setDataRegister(updateData);

        const validation= validate(updateData);
        setError(prevError=>({...prevError, [name]: validation[name]}))
    };
    console.log(dataRegister)

    const handleSubmit=(event)=>{
        event.preventDefault();
        const validData= validate(dataRegister);
        setError(validData);
        setSubmit(true);
        setExit('');

        if(Object.keys(validData).length===0){
            axios.post('http://localhost:3000/users/register', dataRegister)
            .then(()=>{
                setExit('REGISTRO EXITOSO');
                setDataRegister({name: '',
                    lastName: '',
                    email: '',
                    birthdate: '',
                    nDni: '',
                    telefono: '',
                    username: '',
                    password: '',
                    password2: ''});
                setSubmit(false);  
                navigate('/')  
            })
            .catch((err)=>{
                console.log(err);
                setExit('ERROR AL CREAR USUARIO')
            })
        }
    }

    

return(<>
    <div className="divRegister">
        <h3>Registrate y agenda tu cita</h3>
        <form id="msjExit" className="formRegister" onSubmit={handleSubmit}>
            <label >Nombres: <input type="text" name="name" value={dataRegister.name}  onChange={HandleInput} /></label>
            {submit && error.name&& <p style={{color: 'red'}}>{error.name}</p>}
            <label >Apellidos: <input type="text" name="lastName" value={dataRegister.lastName}  onChange={HandleInput}/> </label>
            {submit&& error.lastName&& <p style={{color:'red'}}>{error.lastName}</p>}
            <label >Email : <input type="email" name="email" value={dataRegister.email} onChange={HandleInput} /> </label>
            {submit&& error.email&& <p style={{color:'red'}}>{error.email}</p>}
            <label >Fecha de Nacimiento: <input type="date" name="birthdate" value={dataRegister.birthdate} onChange={HandleInput} required /> </label>
            {submit&& error.birthdate&& <p style={{color:'red'}}>{error.birthdate}</p>}
            <label >Numero DNI: <input type="number" name="nDni" value={dataRegister.nDni} onChange={HandleInput} /> </label>
            {submit&& error.nDni&& <p style={{color:'red'}}>{error.nDni}</p>}
            <label >Telefono : <input type="number" name="telefono" value={dataRegister.telefono } onChange={HandleInput}  /> </label>
            {submit&& error.telefono&& <p style={{color:'red'}}>{error.telefono}</p>}
            <label >Usuario: <input type="text" name="username" value={dataRegister.username} onChange={HandleInput} /> </label>
            {submit&& error.username&& <p style={{color:'red'}}>{error.username}</p>}
            <label >Contraseña : <input type="password" name="password" value={dataRegister.password} onChange={HandleInput} /> </label>
            {submit&& error.password&& <p style={{color:'red'}}>{error.password}</p>}
            <label >Repetir contraseña : <input type="password" name="password2" value={dataRegister.password2} onChange={HandleInput} /> </label>
            {submit&& error.password2&& <p style={{color:'red'}}>{error.password2}</p>}
            <button type="submit">ENVIAR</button> 
        </form>
        <p>¿Ya estas registrado? Inicia sesion haciendo click <Link to='/' >Aqui</Link> </p>
        {exit=== 'REGISTRO EXITOSO'&&<p  className="divExito">{exit}</p>}
        {exit==='ERROR AL CREAR USUARIO'&&<p style={{color:'red', border:'2px solid red', padding:'5px'}}>{exit}</p>}
    </div>
</>)
}
export default Register