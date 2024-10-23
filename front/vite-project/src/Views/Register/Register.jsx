import { useState } from "react"
import {validate} from '../../Helpers/validate'
import './register.css';
import axios from 'axios';

const Register= ()=>{
    const [dataRegister, setDataRegister]= useState({});

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

    const handleInput=(event)=>{
        const{name, value}= event.target;
        const newData= (name==='nDni'|| name==='telefono')? Number(value): value;
        setDataRegister(prevState=>({...prevState, [name]: newData}));

        setError(prevErrors=>({...prevErrors, [name]: validate({[name]: value})[name]}))
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        const validData= validate(dataRegister);
        setError(validData);
        setSubmit(true);

        if(Object.keys(validData).length===0){
            axios.post('http://localhost:3000/users/register', dataRegister)
            .then(()=>{
                const msjForm= document.getElementById('msjExit');
                const msjExit= document.createElement('p');
                msjExit.innerHTML='REGISTRO EXITOSO';
                msjExit.classList.add('divExito');
                msjForm.appendChild(msjExit);
                setDataRegister({})
            })
            .catch((err)=>console.log(err))
        }
    }
return(<>
    <div className="divRegister">
        <h3>Registrate y agenda tu cita</h3>
        <form id="msjExit" className="formRegister" onSubmit={handleSubmit}>
            <label >Nombres: <input type="text" name="name" value={dataRegister.name || ''}  onChange={handleInput} /></label>
            {submit && error.name&& <p style={{color: 'red'}}>{error.name}</p>}
            <label >Apellidos: <input type="text" name="lastName" value={dataRegister.lastName || ''}  onChange={handleInput}/> </label>
            {submit&& error.lastName&& <p style={{color:'red'}}>{error.lastName}</p>}
            <label >Email : <input type="email" name="email" value={dataRegister.email || ''} onChange={handleInput} /> </label>
            {submit&& error.email&& <p style={{color:'red'}}>{error.email}</p>}
            <label >Fecha de Nacimiento: <input type="date" name="birthdate" value={dataRegister.birthdate || ''} onChange={handleInput} required /> </label>
            {submit&& error.birthdate&& <p style={{color:'red'}}>{error.birthdate}</p>}
            <label >Numero DNI: <input type="number" name="nDni" value={dataRegister.nDni ||''} onChange={handleInput} /> </label>
            {submit&& error.nDni&& <p style={{color:'red'}}>{error.nDni}</p>}
            <label >Telefono : <input type="number" name="telefono" value={dataRegister.telefono || ''} onChange={handleInput}  /> </label>
            {submit&& error.telefono&& <p style={{color:'red'}}>{error.telefono}</p>}
            <label >Usuario: <input type="text" name="username" value={dataRegister.username || ''} onChange={handleInput} /> </label>
            {submit&& error.username&& <p style={{color:'red'}}>{error.username}</p>}
            <label >Contraseña : <input type="password" name="password" value={dataRegister.password || ''} onChange={handleInput} /> </label>
            {submit&& error.password&& <p style={{color:'red'}}>{error.password}</p>}
            <label >Repetir contraseña : <input type="password" name="password2" value={dataRegister.password2 || ''} onChange={handleInput} /> </label>
            {submit&& error.password2&& <p style={{color:'red'}}>{error.password2}</p>}
            <button type="submit">ENVIAR</button>
        </form>
    </div>
</>)
}
export default Register