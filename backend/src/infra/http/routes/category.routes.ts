import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureActiveUser } from "../middlewares/ensureActiveUser";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { CreateCategoryController } from "../controllers/category/create-category.controller";
import { ListCategoriesController } from "../controllers/category/list-categories.controller";
import { UpdateCategoryController } from "../controllers/category/update-category.controller";
import { DeleteCategoryController } from "../controllers/category/delete-category.controller";

const categoryRoutes = Router();

categoryRoutes.use(ensureAuthenticated, ensureActiveUser);

categoryRoutes.get("/", new ListCategoriesController().handle);

categoryRoutes.post(
  "/",
  ensureAdmin,
  new CreateCategoryController().handle
);

categoryRoutes.put(
  "/:id",
  ensureAdmin,
  new UpdateCategoryController().handle
);

categoryRoutes.delete(
  "/:id",
  ensureAdmin,
  new DeleteCategoryController().handle
);

export default categoryRoutes;