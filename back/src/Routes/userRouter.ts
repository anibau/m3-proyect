import { Router } from "express";
import { userGetallController, userGetbyIdController, credentialPostRegisterController, checkPostRegisController, postCreateUserController, getCredentialController} from "../Controllers/userController";
const routerUser: Router= Router();

routerUser.get("/", userGetallController);
routerUser.get("/credential", getCredentialController ); //extra ruta
routerUser.get("/:id", userGetbyIdController);
routerUser.post("/createUser", postCreateUserController)
routerUser.post("/createCredential", credentialPostRegisterController);
routerUser.post("/checkCredential", checkPostRegisController)

export default routerUser