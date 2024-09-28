import { Router } from "express";
import routerUser from "./userRouter";
import routerAppoint from "./appointRouter";
const router:Router= Router();

router.use("/users", routerUser);
router.use("/appointments", routerAppoint);

export default router
