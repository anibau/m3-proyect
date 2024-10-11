import { Router } from "express";
import { userGetallController, userGetbyIdController, checkPostRegisController, postCreateUserController, getCredentialController} from "../Controllers/userController";
import { userGetPetsByIDController, userGetPetsController, userPostPetController } from "../Controllers/petsController";
import { validateCredential, validatePet, validateUser,  } from "../Middlewares/middlewares";
const routerUser: Router= Router();

routerUser.get("/", userGetallController); // user
routerUser.get("/credential", getCredentialController ); //extra ruta
routerUser.get("/pets", validatePet, userGetPetsController); //* ruta pets
routerUser.get("/pets/:id", userGetPetsByIDController); //* ruta pets
routerUser.get("/:id", userGetbyIdController); //! user
routerUser.post("/createPet", userPostPetController);  //* ruta pets
routerUser.post("/register", validateUser ,postCreateUserController); //!user
routerUser.post("/login",validateCredential, checkPostRegisController)//!credential

export default routerUser