import { Router } from "express";
import * as RS from "./registration.service.js";



const registrationRouter = Router();

registrationRouter.post("/register", RS.register);
registrationRouter.get("/{:id}", RS.getRegistration);
registrationRouter.patch("/{:id}", RS.updateRegistration);


export default registrationRouter