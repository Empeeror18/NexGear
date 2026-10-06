import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../data/products";
import { useCart } from "../context/CardContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

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
  const isInCart = cartItems.some((item) => item.productId === product.id);
  const productQuantity = isInCart
    ? cartItems.find((item) => item.productId === product.id).quantity
    : 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 text-slate-100">
      <div className="flex flex-col gap-8 rounded-3xl border border-slate-700/70 bg-[#1b2138] p-6 shadow-xl shadow-slate-950/30 md:flex-row md:items-start">
        <div className="w-full shrink-0 md:w-72">
          <img
            src={product.image}
            alt={product.name}
            className="h-auto w-full rounded-2xl border border-slate-600 bg-slate-800 object-cover shadow-lg shadow-slate-950/30"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-3xl font-bold text-violet-300">{product.name}</h1>
          <p className="text-2xl font-semibold text-amber-300">
            ${product.price}
          </p>
          <h3 className="text-base leading-7 text-slate-300">
            {product.description}
          </h3>
          <button
            onClick={() => addToCart(product.id)}
            className="mt-2 w-fit rounded-md border border-violet-400 bg-violet-500 px-5 py-3 font-semibold text-white transition hover:cursor-pointer hover:bg-violet-400"
          >
            Add to Cart ({productQuantity})
          </button>
        </div>
      </div>
    </div>
  );
}
