import { Router } from "express";
import { userGetallController, userGetbyIdController, userPostRegisterController} from "../Controllers/userController";
const routerUser: Router= Router();

routerUser.get("/", userGetallController);
routerUser.get("/:id", userGetbyIdController);
routerUser.post("/", userPostRegisterController);

export default routerUser