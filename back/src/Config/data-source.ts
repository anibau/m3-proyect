import { DataSource } from "typeorm";
import { User } from "../Entities/User";
import { Appointment } from "../Entities/Appointment";
import { Credential } from "../Entities/Credential";
import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_HOST} from "./dotenvConfig";



export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    //dropSchema:true, //limpia la base de datos, util para desarrollo
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
});

export const connectDatabase= async ()=>{
    try{
        await AppDataSource.initialize();
        console.log('conexion con DATABASE exitosa')
    } catch(error){
        console.log(error)
    }
}