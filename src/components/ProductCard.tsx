import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const formatPrice = (price: number) => {
  return `TSh ${price.toLocaleString()}`;
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 block group animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.sellerYears && (
          <div className="absolute top-2 right-2 bg-foreground/80 text-primary-foreground text-xs px-2 py-1 rounded">
            ⭐ {product.sellerYears}
          </div>
        )}
      </div>
      
      <div className="p-3">
        <p className="text-price font-bold text-lg mb-1">
          {formatPrice(product.price)}
        </p>
        <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <MapPin className="w-3 h-3" />
          <span>{product.location}</span>
        </div>
        
        <div className="flex gap-2 mt-2 flex-wrap">
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
            {product.condition}
          </span>
          {product.transmission && (
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">
              {product.transmission}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
