import { Router } from "express";
import { createProduct } from "../controllers/product/createProduct.js";
import { allProducts } from "../controllers/product/allProducts.js";
import { findProductById } from "../controllers/product/findProduct.js";

const productRouter = Router();

productRouter.get("/:id", findProductById);
productRouter.get("/", allProducts);
productRouter.post("/", createProduct);

export default productRouter;
