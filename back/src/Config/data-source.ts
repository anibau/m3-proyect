import { DataSource } from "typeorm";
import { User } from "../Entities/User";
import { Appointment } from "../Entities/Appointment";
import { credential } from "../Entities/Credential";
import { Pet } from "../Entities/Pets";
import { DTBase, password, portDTB} from "./dotenvConfig";



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(portDTB),
    username: "postgres",
    password: password,
    database: DTBase,
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