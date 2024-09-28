import { Router } from "express";
import { getTurnAllController, getTurnbyIdController, postTurnController, putCancelController } from "../Controllers/appointController";
const routerAppoint= Router();

routerAppoint.get("/", getTurnAllController);
routerAppoint.get("/:id", getTurnbyIdController);
routerAppoint.post("/schedule", postTurnController);
routerAppoint.put("/cancel", putCancelController)

export default routerAppoint;