import { useState, useContext } from "react"
import './login.css';
import axios from "axios";
import perroGatoRgba from '../../img/perroGatoRbga.png';
import { validateLogin } from "../../Helpers/validate";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../Context/Users";
import {Link} from 'react-router-dom';

const Login=()=>{
    const [dataLogin, setDataLogin]= useState({
        username: '',
        password:''
    });
    const [errors, setErrors]=useState('');
    const [validData, setValidData]= useState({
         username: 'usuario es requerido',
        password:'contraseña requerida'
    });
    const [submit, setSubmit]=useState(false);
    const navigate= useNavigate();
    const {users, setUsers}= useContext(UsersContext);

    const handleInput= (event)=>{
        const{name, value}=event.target;
        setDataLogin(preState=>({...preState, [name]:value}));
        
        const validLogin= validateLogin({...dataLogin,[name]:value});
        setValidData(prevValidate=>({...prevValidate, [name]:validLogin[name]}))
        if(errors){setErrors('')}
    };
    console.log(dataLogin)

    const handleSubmit=(event)=>{
        event.preventDefault();
        const validData= validateLogin(dataLogin);
        setValidData(validData);
        setSubmit(true);

      if(Object.keys(validData).length===0){
          axios.post('http://localhost:3000/users/login', dataLogin)
          .then((resp)=>{
              const data=resp.data;
              console.log(data);
              const dataUser= data.user;
              const dataId= dataUser.id;
              //guardar usuario en el contexto global
              setUsers(dataUser);
                console.log(users)
              //redirigir al usuario a la ruta de turnos
              navigate(`/appointments/${dataId}`);
              //resetear estados
              setErrors('');
              setValidData({});
              setSubmit(false)   
            })
              .catch(()=>{
                  //mensaje de error en datos
                  setErrors('usuario o contraseña incorrecta');
                  setDataLogin({username:'', password:''});
                })
        }  
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
            <label>Usuario: <input type="text" value={dataLogin.username} name="username" onChange={handleInput} required/></label>
            {submit && validData.username&& <p style={{color:'red'}}>{validData.username}</p>}
            <label>Contraseña: <input type="password" value={dataLogin.password} name="password" onChange={handleInput} required/></label>
            {submit&& validData.password&& <p style={{color:'red'}}>{validData.password}</p>}
            <button type="submit">Login</button>
        </form>
            <p>¿No estas registrado? Registrate haciendo click <Link to='/register' >Aqui</Link> </p>
            {errors&&<p className="divError">{errors}</p>}
    </div>  
    </div>  
    </>)
}
export default Login