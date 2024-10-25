import { useState } from "react"
import './login.css';
import axios from "axios";
import perroGatoRgba from '../../img/perroGatoRbga.png';

const Login=()=>{
    const [dataLogin, setDataLogin]= useState({});
    const [errors, setErrors]=useState('');

    const handleInput= (event)=>{
        const{name, value}=event.target;
        setDataLogin(preState=>({...preState, [name]:value}));
        if(errors){setErrors('')}
    };
    console.log(dataLogin)

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        axios.post('http://localhost:3000/users/login', dataLogin)
        .then((resp)=>{
        alert(`login exitoso ${resp.data}`)
        setErrors('')
    })
        .catch(()=>{
            //mensaje de error en datos
            setErrors('usuario o contraseña incorrecta');
            setDataLogin({});
        })
    }

    return(<>
    <div className="containerLogin">
        <div className="logoLogin">
            <h3><b>PET</b>SPA</h3>
        <img src={perroGatoRgba} alt="imagen de perro y gato" width={150}  />
        </div>
    <div className="divLogin">
        <h3 >Ingresa</h3>
        <form id="msjForm" onSubmit={handleSubmit} className="formLogin">
            <label>Usuario: <input type="text" value={dataLogin.username|| ''} name="username" onChange={handleInput} required/></label>
            <label>Contraseña: <input type="password" value={dataLogin.password ||''} name="password" onChange={handleInput} required/></label>
            <button type="submit">Login</button>
        </form>
            {errors&&<p className="divError">{errors}</p>}
    </div>  
    </div>  
    </>)
}
export default Login