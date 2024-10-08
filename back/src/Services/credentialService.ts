import { credentialMoldel, userModel} from "../Config/data-source";
import { IdtoCredential } from "../Dto/dtoCredential";
import { credential } from "../Entities/Credential";
import { ICredential } from "../interfaces/ICredential";

// const credential1: ICredential={
//     id: 1,
//     username: 'ani28',
//     password: 'manchas25'
// }
// const credential2: ICredential={
//     id: 2,
//     username: 'ani30',
//     password: 'manchas27'
// }
// let credentials: ICredential[]=[];
// credentials.push(credential1, credential2);
//EXTRA SERVICE
export const getCredentialService= async(): Promise<credential[]>=>{
    const creden:credential[]= await credentialMoldel.find();
    return creden
}

//!Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
export const createCredentialServ= async(data: IdtoCredential):Promise<credential>=> {
    const newCred: credential= await credentialMoldel.create(data);
    await credentialMoldel.save(newCred);

    const user= await userModel.findOneBy({
        "id": data.userId
    });
    if(user){
        user.credentials= newCred;
        await userModel.save(user)
    } 
    return newCred
    // let newCredential: ICredential={
    //     id: credentials.length+1,
    //     username: data.username,
    //     password: data.password
    // };
    // credentials.push(newCredential);
    // return  newCredential.id
};
//!Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
export const checkCredentialServ= async (data: IdtoCredential):Promise<number|string>=>{
    const {username, password}=data;
    const userId: credential | null= await credentialMoldel.findOneBy({username, password});
    console.log(userId);
    if(userId){
        return userId?.id
    } else{return 'error al encontrar los datos'}
    // const user= credentials.find((user: ICredential)=>{
    //    return user.username===username;
       
    // });
    // if(!user){return 'usuario no encontrado'};
    // if(user.password != password){return 'Contraseña incorrecta'};
    // return `validacion de credenciales exitosa, su id es ${user.id}`
}