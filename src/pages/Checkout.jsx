import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext.jsx";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal();

  function placeOrder() {
    alert("Successful Order!");
    clearCart();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-50">
        Checkout
      </h1>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-700/60 bg-[#171B2E] p-5 shadow-lg shadow-slate-950/20">
          <h2 className="mb-4 text-xl font-bold text-slate-100">
            Order Summary
          </h2>

          {!cartItems.length ? (
            <div className="flex min-h-52 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-slate-600 bg-slate-900/30 p-8 text-center text-slate-300">
              <p className="text-lg">Your cart is empty.</p>
              <Link to="/" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                className="flex items-center gap-4 border-b border-slate-700/60 py-4 last:border-none last:pb-0"
                key={item.productId}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-slate-50">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    ${item.product.price} each
                  </p>
                </div>

                <div className="ml-auto flex flex-col items-end gap-3 sm:flex-row sm:items-center">
                  <div className="inline-flex items-center overflow-hidden rounded-full border border-slate-600 bg-slate-900">
                    <button
                      className="h-8 w-8 text-lg text-slate-200 transition hover:bg-violet-500/15"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold text-slate-50">
                      {item.quantity}
                    </span>
                    <button
                      className="h-8 w-8 text-lg text-slate-200 transition hover:bg-violet-500/15"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p className="w-20 text-right text-base font-bold text-slate-50">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="rounded-md border border-slate-600 bg-transparent px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-violet-400 hover:bg-violet-500/10"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="rounded-2xl border border-slate-700/60 bg-[#171B2E] p-5 shadow-lg shadow-slate-950/20 lg:sticky lg:top-4">
          <h2 className="mb-4 text-xl font-bold text-slate-100">Total</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-slate-300">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between border-t border-slate-700/60 pt-3 text-lg font-semibold">
              <span className="text-slate-100">Total:</span>
              <span className="text-violet-300">${total.toFixed(2)}</span>
            </div>

            <button
              className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-50"
              onClick={placeOrder}
              disabled={!cartItems.length}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
