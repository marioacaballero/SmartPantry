import { Router } from "express";
import productRouter from "./productRouter.js";

const router = Router();

router.use("/product", productRouter);
router.use("/", (req, res) => res.send("Home API page"));

export default router;
