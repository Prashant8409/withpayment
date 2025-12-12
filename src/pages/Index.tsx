import { useState } from "react";
import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import TrendingAds from "@/components/TrendingAds";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Tanzania");

  return (
    <div className="min-h-screen bg-background">
      <Header 
        selectedRegion={selectedRegion} 
        onRegionChange={setSelectedRegion} 
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <CategorySidebar />
          <TrendingAds />
        </div>
      </main>
    </div>
  );
};

export default Index;
