import { Router } from "express";
import { getTurnAllController, getTurnbyIdController, postTurnController, putCancelController } from "../Controllers/appointController";
const routerAppoint= Router();

routerAppoint.get("/", getTurnAllController);
routerAppoint.get("/:id", getTurnbyIdController);
routerAppoint.post("/schedule", postTurnController);
routerAppoint.put("/:id", putCancelController);

export default routerAppoint;