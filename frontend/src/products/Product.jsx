import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <h1>Productos</h1>

      {products.length > 0 &&
        products.map((p) => (
          <CardProduct
            key={p.id}
            codigo={p.codigoDeBarra}
            imagen={p.imagen}
            nombre={p.nombreVisible}
            nova={p.nova}
            score={p.nutriScore}
          />
        ))}
    </main>
  );
}

export default Product;
