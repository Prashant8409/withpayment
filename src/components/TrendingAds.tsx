import { Grid3X3, List } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const TrendingAds = () => {
  return (
    <section className="flex-1">
      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-card rounded-lg p-4 border-l-4 border-primary">
          <h3 className="font-semibold text-foreground">How to sell</h3>
          <p className="text-sm text-muted-foreground">Post your ad for free</p>
        </div>
        <div className="bg-card rounded-lg p-4 border-l-4 border-accent">
          <h3 className="font-semibold text-foreground">How to buy</h3>
          <p className="text-sm text-muted-foreground">Find the best deals</p>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Trending ads</h2>
        <div className="flex gap-1">
          <button className="p-2 rounded bg-primary text-primary-foreground">
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button className="p-2 rounded bg-secondary text-secondary-foreground hover:bg-muted transition-colors">
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TrendingAds;
