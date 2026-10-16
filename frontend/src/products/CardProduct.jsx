function CardProduct({ nombre, codigo, imagen, score, nova }) {
  return (
    <div>
      {imagen && <img src={imagen} alt={`Imagen para el producto ${nombre}`} />}
      <h3>{nombre}</h3>
      <h5>{codigo}</h5>
      <h5>{score || "Sin especificar"}</h5>
      <h5>{nova || "Sin especificar"}</h5>
    </div>
  );
}

export default CardProduct;
