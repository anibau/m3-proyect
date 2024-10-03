import { IdtoCredential } from "../Dto/dtoCredential";
import { ICredential } from "../interfaces/ICredential";

const credential1: ICredential={
    id: 1,
    username: 'ani28',
    password: 'manchas25'
}
const credential2: ICredential={
    id: 2,
    username: 'ani30',
    password: 'manchas27'
}
let credentials: ICredential[]=[];
credentials.push(credential1, credential2);
//EXTRA SERVICE
export const getCredentialService= async()=>{
    return credentials
}

//!Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
export const createCredentialServ= async(data: IdtoCredential)=> {
    let newCredential: ICredential={
        id: credentials.length+1,
        username: data.username,
        password: data.password
    };
    credentials.push(newCredential);
    return  newCredential.id
};
//!Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
export const checkCredentialServ= async (data: IdtoCredential)=>{
    const {username, password}=data;
    const user= credentials.find((user: ICredential)=>{
       return user.username===username;
       
    });
    if(!user){return 'usuario no encontrado'};
    if(user.password != password){return 'Contraseña incorrecta'};
    return `validacion de credenciales exitosa, su id es ${user.id}`
}