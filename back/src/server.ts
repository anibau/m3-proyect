import express  from "express";
import router from "./Routes/indexRouter";
const server= express();

server.use(express.json());
server.use(router);


export default server