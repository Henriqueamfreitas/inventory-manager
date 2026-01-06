import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureActiveUser } from "../middlewares/ensureActiveUser";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateProductController } from "../controllers/product/create-product.controller";
import { ListProductsController } from "../controllers/product/list-products.controller";
import { UpdateProductController } from "../controllers/product/update-product.controller";
import { DeactivateProductController } from "../controllers/product/deactivate-product.controller";

const productRoutes = Router();

productRoutes.use(ensureAuthenticated, ensureActiveUser);

productRoutes.get("/", new ListProductsController().handle);

productRoutes.post(
  "/",
  ensureAdmin,
  new CreateProductController().handle
);

productRoutes.put(
  "/:id",
  ensureAdmin,
  new UpdateProductController().handle
);

productRoutes.delete(
  "/:id",
  ensureAdmin,
  new DeactivateProductController().handle
);

export default productRoutes;