import { product } from "../../db.js";

export const createProduct = async (req, res) => {
  if (!req.body)
    res.status(400).send("El codigo de barras o el nombre son obligatorios");

  const { codigoDeBarras, nombreVisible, imagen, nutriScore, nova } = req.body;

  if (!codigoDeBarras || !nombreVisible)
    res.status(400).send("El codigo de barras o el nombre son obligatorios");

  try {
    const newProduct = await product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(404).json(error);
  }
};
