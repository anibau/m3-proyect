import { IdtoCheckCredential, IdtoCredential } from "../Dto/dtoCredential";
import { credential } from "../Entities/Credential";
import { credentialRepository } from "../Repositories/credentialRepository";
import { userRepository } from "../Repositories/userRepository";

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
export const getCredentialService = async (): Promise<credential[]> => {
  const creden: credential[] = await credentialRepository.find({
    relations: { user: true },
  });
  return creden;
};

//!Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
export const createCredentialServ = async (
  data: IdtoCredential
): Promise<credential> => {
  try {
    //se crea la credential
    const newCred: credential = credentialRepository.create(data);
    await credentialRepository.save(newCred);
    //se encuentra USER
    const user = await userRepository.findOne({
      where: { id: data.userId },
      relations: { credentials: true },
    });
    //rellana la columna crendetial de USER
    if (!user) {
      throw Error();
    }
    user.credentials = newCred;
    await userRepository.save(user);

    return newCred;
  } catch (err) {
    throw Error();
  }
  // let newCredential: ICredential={
  //     id: credentials.length+1,
  //     username: data.username,
  //     password: data.password
  // };
  // credentials.push(newCredential);
  // return  newCredential.id
};
//!Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.
export const checkCredentialServ = async (data: IdtoCheckCredential): Promise<  | {
      login: boolean;
      user?: {
        id: number;
        name: string;
        lastName: string;
        email: string;
        birthdate: string;
        nDni: number;
        telefono: number;
      };
    }
  | string
> => {
  // Buscar las credenciales con username y password
  const credential = await credentialRepository.findOne({
    where: {
      username: data.username,
      password: data.password,
    },
    relations: ["user"], // Incluir la relación con el usuario
  });

  // Si se encuentran las credenciales, devolver el usuario asociado
  if (credential && credential.user) {
    return {
      login: true,
      user: {
        id: credential.user.id,
        name: credential.user.name,
        lastName: credential.user.lastName,
        email: credential.user.email,
        birthdate: credential.user.birthdate,
        nDni: credential.user.nDni,
        telefono: credential.user.telefono,
      },
    };
  }

  // Si no se encuentran las credenciales o el usuario, devolver un mensaje de error
  throw new Error("Error: datos incorrectos o no encontrados");
};

// if(userId){
//     const userLogin:Login={
//         login:true,
//           }
//     return userId?.id
// } else{return 'error al encontrar los datos'}
// const user= credentials.find((user: ICredential)=>{
//    return user.username===username;

// });
// if(!user){return 'usuario no encontrado'};
// if(user.password != password){return 'Contraseña incorrecta'};
// return `validacion de credenciales exitosa, su id es ${user.id}`
