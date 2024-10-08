import { DataSource } from "typeorm";
import { User } from "../Entities/User";
import { Appointment } from "../Entities/Appointment";
import { credential } from "../Entities/Credential";
import { Pet } from "../Entities/Pets";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "manchas1",
    database: "pi3_spapet",
    synchronize: true,
    //dropSchema:true, //limpia la base de datos, util para desarrollo
    logging: false,
    entities: [User, Appointment, credential, Pet],
    subscribers: [],
    migrations: [],
});

export const userModel= AppDataSource.getRepository(User);
export const credentialMoldel= AppDataSource.getRepository(credential);
export const appointModel= AppDataSource.getRepository(Appointment);
export const petModel= AppDataSource.getRepository(Pet)