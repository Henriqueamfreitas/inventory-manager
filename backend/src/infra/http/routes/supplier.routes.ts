import { Router } from "express";
import { CreateSupplierController } from "../controllers/supplier/create-supplier.controller";
import { ListSuppliersController } from "../controllers/supplier/list-suppliers.controller";
import { FindSupplierByIdController } from "../controllers/supplier/find-supplier-by-id.controller";
import { UpdateSupplierController } from "../controllers/supplier/update-supplier.controller";
import { DeactivateSupplierController } from "../controllers/supplier/deactivate-supplier.controller";

const supplierRoutes = Router();

supplierRoutes.post("/", new CreateSupplierController().handle);
supplierRoutes.get("/", new ListSuppliersController().handle);
supplierRoutes.get("/:id", new FindSupplierByIdController().handle);
supplierRoutes.patch("/:id", new UpdateSupplierController().handle);
supplierRoutes.patch("/:id/deactivate", new DeactivateSupplierController().handle);

export default supplierRoutes;