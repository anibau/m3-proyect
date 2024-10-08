import { port } from "./Config/dotenvConfig";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./Config/data-source";

AppDataSource.initialize()
.then(res=>{
    console.log('conexion con base de datos exitosa');
    server.listen(port, ()=>{
        console.log(`servidor escuchando en el puerto ${port}`)
    })
})
