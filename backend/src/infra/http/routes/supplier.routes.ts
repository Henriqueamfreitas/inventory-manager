import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureActiveUser } from "../middlewares/ensureActiveUser";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateSupplierController } from "../controllers/supplier/create-supplier.controller";
import { ListSuppliersController } from "../controllers/supplier/list-suppliers.controller";
import { FindSupplierByIdController } from "../controllers/supplier/find-supplier-by-id.controller";
import { UpdateSupplierController } from "../controllers/supplier/update-supplier.controller";
import { DeactivateSupplierController } from "../controllers/supplier/deactivate-supplier.controller";

const supplierRoutes = Router();

supplierRoutes.use(ensureAuthenticated, ensureActiveUser);

supplierRoutes.get("/", new ListSuppliersController().handle);
supplierRoutes.get("/:id", new FindSupplierByIdController().handle);

supplierRoutes.post(
  "/",
  ensureAdmin,
  new CreateSupplierController().handle
);

supplierRoutes.patch(
  "/:id",
  ensureAdmin,
  new UpdateSupplierController().handle
);

supplierRoutes.patch(
  "/:id/deactivate",
  ensureAdmin,
  new DeactivateSupplierController().handle
);

export default supplierRoutes;