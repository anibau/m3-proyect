import { useState } from "react"
import './login.css';
import axios from "axios";

const Login=()=>{
    const [dataLogin, setDataLogin]= useState({});
    // const [errors, setErrors]=useState(false);

    const handleInput= (event)=>{
        const{name, value}=event.target;
        setDataLogin(preState=>({...preState, [name]:value}))
        
    };
    console.log(dataLogin)
    const handleSubmit=(event)=>{
        event.preventDefault();
        
        axios.post('http://localhost:3000/users/login', dataLogin)
        .then((resp)=>
        alert(`login exitoso ${resp.data}`))
        .catch(()=>{
            //mensaje de error en datos
            const msjForm= document.getElementById('msjForm');
            const divMsj= document.createElement('p');
            divMsj.innerHTML='usuario o contraseña incorrectos';
            divMsj.classList.add('divError');
            msjForm.appendChild(divMsj);
            setDataLogin({});
        })
    }

    return(<>
    <div className="divLogin">
        <h3 >Ingresa</h3>
        <form id="msjForm" onSubmit={handleSubmit} className="formLogin">
            <label>Usuario: <input type="text" value={dataLogin.username|| ''} name="username" onChange={handleInput} /></label>
            <label>Contraseña: <input type="password" value={dataLogin.password ||''} name="password" onChange={handleInput} /></label>
            <button type="submit">Login</button>
        </form>
    </div>    
    </>)
}
export default Login