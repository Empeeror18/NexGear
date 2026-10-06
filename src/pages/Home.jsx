import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";

function Home() {
  const products = getProducts();

  return (
    <div>
      <section className="mx-auto max-w-3xl px-4 pb-4 pt-16 text-center sm:pt-20">
        <h1 className="font-['Space_Grotesk'] text-5xl font-bold leading-none tracking-tight text-white sm:text-7xl">
          Gear Up with NexGear
        </h1>
        <p className="mt-4 text-lg font-extrabold tracking-wide text-violet-300">
          Next Gear. Next Level.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-300">
          Premium consoles, controllers, and gaming essentials for every kind of
          player.
        </p>
      </section>
      <div id="products" className="container mx-auto px-4 pt-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-300">
              Featured gear
            </p>
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-slate-50">
              Level up your setup
            </h2>
          </div>
          <span className="hidden text-sm text-slate-400 sm:block">
            {products.length} products
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
