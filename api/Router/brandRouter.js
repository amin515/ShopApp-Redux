import express from "express";
import {
  createBrands,
  deleteBrand,
  getAllBrands,
  getOneBrand,
  updateMultipleBrands,
  updateOneBrand,
} from "../Controllers/brandController.js";

import { brandMulter } from "../Utility/brandMulter.js";

// router init
const router = express.Router();

router.get("/brands", getAllBrands);
router.get("/brand/:slug", getOneBrand);
router.post("/brand", brandMulter, createBrands);
router.put("/brand/:id", updateOneBrand);
router.patch("/brand/:id", updateMultipleBrands);
router.delete("/brand/:id", deleteBrand);

// export
export default router;
