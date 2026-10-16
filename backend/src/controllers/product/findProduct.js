import { product } from "../../db.js";

export const findProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const findProduct = await product.findByPk(id);
    if (findProduct === null)
      res.status(404).send("El producto no se encuentra en la bd");
    res.status(200).json(findProduct);
  } catch (error) {
    res.status(400).send("error");
  }
};
