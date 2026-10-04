import { Link } from "react-router-dom";

export default function ProductCard({product}) {
  return (
    <div className="product-card">
      <img src={product.image} className="product-card-image" />
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">{product.price}</p>
        <div className="product-action">
          <Link className="btn-sec" to={`/products/${product.id}`}> View Details</Link>
          <button className="btn-primary"> Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
