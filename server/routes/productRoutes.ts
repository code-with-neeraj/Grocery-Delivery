import express from "express";
import { createProduct, deleteProduct, getFlashDeals, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
import admin from "../middleware/admin.js";
import auth from "../middleware/auth.js";

const productRouter = express.Router();

productRouter.get("/flash-deals",getFlashDeals);
productRouter.get("/",getProducts);
productRouter.get("/:id",getProduct);
productRouter.get("/",auth, admin,createProduct);
productRouter.get("/:id",auth, admin,updateProduct);
productRouter.get("/:id",auth, admin,deleteProduct);

export default productRouter;