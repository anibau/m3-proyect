import { Router } from "express";
import { userGetallController, userGetbyIdController, credentialPostRegisterController, checkPostRegisController, postCreateUserController, getCredentialController} from "../Controllers/userController";
import { userGetPetsByIDController, userGetPetsController, userPostPetController } from "../Controllers/petsController";
const routerUser: Router= Router();

routerUser.get("/", userGetallController);
routerUser.get("/credential", getCredentialController ); //extra ruta
routerUser.get("/pets", userGetPetsController); //ruta pets
routerUser.get("/pets/:id", userGetPetsByIDController); //ruta pets
routerUser.get("/:id", userGetbyIdController);
routerUser.post("/createPet", userPostPetController);  //ruta pets
routerUser.post("/createUser", postCreateUserController);
routerUser.post("/createCredential", credentialPostRegisterController);
routerUser.post("/checkCredential", checkPostRegisController)

export default routerUser