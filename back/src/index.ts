import { port } from "./Config/dotenvConfig";
import server from "./server";
import "reflect-metadata";
import { connectDatabase } from "./Config/data-source";

//AppDataSource.initialize()
try{
    connectDatabase();
    server.listen(port, ()=>{
        console.log(`servidor escuchando en el puerto ${port}`)
    })
}catch(error){
    console.log(error)
}
    
