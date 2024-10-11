import { Router } from "express";
import { getTurnAllController, getTurnbyIdController, postTurnController, putCancelController } from "../Controllers/appointController";
import { validateAppointment } from "../Middlewares/middlewares";
const routerAppoint= Router();

routerAppoint.get("/", getTurnAllController); //! turn
routerAppoint.get("/:id", getTurnbyIdController); //! turn
routerAppoint.post("/schedule",validateAppointment, postTurnController); //! turn
routerAppoint.put("/cancel/:id", putCancelController); //! turn

export default routerAppoint;