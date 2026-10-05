import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const isInCart = cartItems.some((item) => item.productId === product.id);
  const productQuantity = isInCart
    ? cartItems.find((item) => item.productId === product.id).quantity
    : 0;

  return (
    
    <div className="grid grid-cols-1 gap-2 rounded-md border border-[#8B5CF6]/40 bg-[#171B2E] p-4 space-x-23 hover:-translate-y-1 hover:border-[#8B5CF6]  ">

      <img src={product.image} alt={product.name} className="" />
      <div className="mt-1 ">
        <h3 className="font-bold text-2xl mb-1">{product.name}</h3>
        <p className="font-bold text-lg">${product.price}</p>
        <div className="mt-2 flex items-center space-between gap-3">
          <Link className="btn-sec " to={`/products/${product.id}`}>
            {" "}
            View Details
          </Link>
          <button
            className="btn-primary hover:cursor-pointer"
            onClick={() => addToCart(product.id)}
          >
            {" "}
            Add to Cart ({productQuantity})
          </button>
        </div>
      </div>
    </div>
  );
}
