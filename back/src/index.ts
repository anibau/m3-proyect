import { port } from "./Config/dotenvConfig";
import server from "./server";


server.listen(port, ()=>{
    console.log(`servidor escuchando en el puerto ${port}`)
})
