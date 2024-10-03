import { dtoUser } from "../Dto/dtoUser";
import { IUser } from "../interfaces/IUser";
import { createCredentialServ } from "./credentialService";

const user1={
    id: 1,
    name: 'string',
    email: 'string',
    birthdate: 'string',
    nDni: 4565,
    credentialsId: 1
};
const user2={
    id: 2,
    name: 'string',
    email: 'string',
    birthdate: 'string',
    nDni: 4588,
    credentialsId: 2
}
// !Implementar una función que pueda retornar el arreglo completo de usuarios.
let users: IUser[]=[];
users.push(user1, user2);
let id= 2;
export const getAllUsersService= async()=>{
    return users
}
// !Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
export const getUserByIdService= async(id:number)=>{
    const userId= users.find((user: IUser)=>{return user.id=== id});
    return userId
}

//! Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
export const postCreateUserService= async(data:dtoUser)=>{
    const {username, password}=data;
    let newCredential= await createCredentialServ({username, password});
    console.log(`nueva credencial ${newCredential}`);
    let newUser: IUser={
        id: users.length+1,
        name: data.name,
        email: data.email,
        birthdate: data.birthdate,
        nDni: data.nDni,
        credentialsId: newCredential
    };
    users.push(newUser);
    return `nuevo usuario con id ${newUser.id}`
}