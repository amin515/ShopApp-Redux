import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateMultipleProduct,
  updateOneProduct,
} from "../Controllers/productController.js";

import { productMulter } from "../Utility/productMulter.js";

// router init
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/product/:slug", getOneProduct);
router.post("/product", productMulter, createProduct);
router.put("/product/:id", updateOneProduct);
router.patch("/product/:id", updateMultipleProduct);
router.delete("/product/:id", deleteProduct);

// export
export default router;
