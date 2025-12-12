import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Shield, Heart, Share2, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const formatPrice = (price: number) => {
  return `TSh ${price.toLocaleString()}`;
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="jiji-header-gradient px-4 py-3 sticky top-0 z-10">
        <div className="container mx-auto flex items-center gap-4">
          <Link 
            to="/" 
            className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </Link>
          <span className="text-xl font-bold text-primary-foreground">Jiji</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Image */}
            <div className="bg-card rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.sellerYears && (
                  <div className="absolute top-4 right-4 bg-foreground/80 text-primary-foreground text-sm px-3 py-1.5 rounded-lg">
                    ⭐ {product.sellerYears}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-card rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <p className="text-price font-bold text-2xl">
                  {formatPrice(product.price)}
                </p>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                    <Heart className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                    <Share2 className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
              
              <h1 className="text-xl font-semibold text-foreground mb-3">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{product.location}</span>
              </div>

              <div className="flex gap-2 mb-4">
                <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                  {product.condition}
                </span>
                {product.transmission && (
                  <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {product.transmission}
                  </span>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <h2 className="font-semibold text-foreground mb-2">Description</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-card rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Safety tips</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Meet in a safe, public location</li>
                <li>• Check the item before you buy</li>
                <li>• Pay only after inspecting the item</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Seller Info */}
            <div className="bg-card rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">S</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Seller</p>
                  <p className="text-sm text-muted-foreground">Member since 2020</p>
                </div>
              </div>

              {/* BUY NOW Button */}
              <Button 
                onClick={() => navigate("/checkout")}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
              >
                BUY NOW
              </Button>

              <button className="w-full mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Flag className="w-4 h-4" />
                Report this ad
              </button>
            </div>

            {/* Ad ID */}
            <div className="bg-card rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Ad ID: <span className="text-foreground font-medium">{product.id}</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Posted: <span className="text-foreground font-medium">Today</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
