import { dtoUser } from "../Dto/dtoUser";
import { User } from "../Entities/User";
import { credentialRepository } from "../Repositories/credentialRepository";
import { userRepository } from "../Repositories/userRepository";
import { createCredentialServ } from "./credentialService";

// const user1={
//     id: 1,
//     name: 'string',
//     email: 'string',
//     birthdate: 'string',
//     nDni: 4565,
//     credentialsId: 1
// };
// const user2={
//     id: 2,
//     name: 'string',
//     email: 'string',
//     birthdate: 'string',
//     nDni: 4588,
//     credentialsId: 2
// }
// let users: IUser[]=[];
// !Implementar una función que pueda retornar el arreglo completo de usuarios.
// users.push(user1, user2);

export const getAllUsersService= async(): Promise<User[]>=>{
    const users:User[]= await userRepository.find({
        relations: {
            appointments: true,
            credentials: true,
        }
    });
    return users
}
// !Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
export const getUserByIdService= async(id:number): Promise<User|null>=>{
        const userId= await userRepository.findById(id)
        return userId 
    // const userId= users.find((user: IUser)=>{return user.id=== id});
    // return userId
}

//! Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
export const postCreateUserService= async(data:dtoUser):Promise<User|void>=>{
   try{
    const user:User= userRepository.create(data);
    await userRepository.save(user);
    if(!user.id){throw Error('usuario no creado')};
    const credential= await createCredentialServ({username: data.username, password: data.password, userId: user.id})
    await userRepository.save(credential);
    //extra
    user.credentials= credential;
    await userRepository.save(user);
    //RELACIONAMOS EL USUARIO A LAS CREDENTIALS
    const credId= await credentialRepository.findOneBy({"id": credential.id});
    if(!credId){
        throw Error('credenciales no encontradas')
    }
    credId.user= user;
    await credentialRepository.save(credId);
    return user

   }catch(err){
     throw Error('error al creau usuario')
   }
}