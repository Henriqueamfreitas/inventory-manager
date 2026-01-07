import { Router } from "express";
import { AddStockController } from "../controllers/stock/add-stock.controller";
import { ListStockByProductController } from "../controllers/stock/list-stock-by-product.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { RemoveStockController } from "../controllers/stock/remove-stock.controller";

const stockRoutes = Router();

stockRoutes.use(ensureAuthenticated);

stockRoutes.post("/in", ensureAdmin, new AddStockController().handle);
stockRoutes.post("/out", ensureAdmin, new RemoveStockController().handle);
stockRoutes.get(
  "/product/:productId",
  new ListStockByProductController().handle
);

export default stockRoutes;