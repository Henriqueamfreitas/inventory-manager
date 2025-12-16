import { Router } from "express";
import { CreateUserController } from "../controllers/user/create-user.controller";
import { FindUserByEmailController } from "../controllers/user/find-user-by-email.controller";
import { FindUserByIdController } from "../controllers/user/find-user-by-id.controller";
import { ListUsersController } from "../controllers/user/list-users.controller";
import { UpdateUserController } from "../controllers/user/update-user.controller";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.get("/email/:email", new FindUserByEmailController().handle);
userRoutes.get("/:id", new FindUserByIdController().handle);
userRoutes.get("/", new ListUsersController().handle);
userRoutes.put("/:id", new UpdateUserController().handle);

export default userRoutes;
