import { Router } from "express";
import { createProduct } from "../controllers/product/createProduct.js";
import { allProducts } from "../controllers/product/allProducts.js";

const productRouter = Router();

productRouter.get("/", allProducts);
productRouter.post("/", createProduct);

export default productRouter;
