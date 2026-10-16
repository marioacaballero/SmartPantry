import { product } from "../../db.js";

export const allProducts = async (req, res) => {
  try {
    const products = await product.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(401).json(error);
  }
};
