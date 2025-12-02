import { Router } from "express";
import { CreateUserController } from "../controllers/user/create-user.controller";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);

export default userRoutes;
