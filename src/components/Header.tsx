import { User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { regions } from "@/data/products";

interface HeaderProps {
  selectedRegion?: string;
  onRegionChange?: (region: string) => void;
}

const Header = ({ selectedRegion = "All Tanzania", onRegionChange }: HeaderProps) => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="jiji-header-gradient px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-foreground tracking-tight">Jiji</span>
          </Link>
          
          <p className="hidden md:block text-primary-foreground/90 text-sm font-medium">
            SELL FASTER, BUY SMARTER
          </p>
          
          <Link 
            to="/" 
            className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          >
            <User className="w-5 h-5 text-primary-foreground" />
          </Link>
        </div>
      </div>

      {/* Search Section */}
      <div className="jiji-header-gradient px-4 pb-6 pt-2">
        <div className="container mx-auto">
          <h1 className="text-primary-foreground text-xl md:text-2xl font-semibold text-center mb-4">
            What are you looking for?
          </h1>
          
          <div className="flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
            <Select value={selectedRegion} onValueChange={onRegionChange}>
              <SelectTrigger className="w-full md:w-48 bg-card border-0 text-foreground">
                <SelectValue placeholder="All Tanzania" />
              </SelectTrigger>
              <SelectContent className="bg-card z-50">
                <SelectItem value="All Tanzania">All Tanzania</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="relative flex-1">
              <Input 
                placeholder="I am looking for..." 
                className="w-full bg-card border-0 pr-10 text-foreground placeholder:text-muted-foreground"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
