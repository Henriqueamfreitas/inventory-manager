import { Router } from "express";
import { CreateUserController } from "../controllers/user/create-user.controller";
import { FindUserByEmailController } from "../controllers/user/find-user-by-email.controller";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.get("/", new FindUserByEmailController().handle);

export default userRoutes;
