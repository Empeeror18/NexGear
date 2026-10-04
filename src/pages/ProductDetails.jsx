import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} className="product-card-image" />
      </div>

      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <h3>{product.description}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
