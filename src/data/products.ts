export interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  description: string;
  condition: string;
  transmission?: string;
  sellerYears?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "BMW X6 Sports Activity Coupe 2008 Black",
    price: 32000000,
    location: "Dar es Salaam, Kinondoni",
    image: "https://i.postimg.cc/XvC6S1td/7079816-MTM5Mi0x-Nj-Aw-LTcy-YWI2Yj-Ex-Yj-It-Mg.webp",
    description: "Petrol engine with 3.0l M Sport Version. Well maintained, full service history available.",
    condition: "Local Used",
    transmission: "Automatic",
    sellerYears: "5+ Years on Jiji"
  },
  {
    id: "2",
    title: "Toyota Vanguard 2008 Black",
    price: 28500000,
    location: "Dar es Salaam, Kinondoni",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
    description: "Ilyakuwahi hii! bei: 28.5mil toyota vanguard year:2008 engine capacity:2300 engine code.",
    condition: "Local Used",
    transmission: "Automatic"
  },
  {
    id: "3",
    title: "BMW 1 Series 2013 Blue",
    price: 14800000,
    location: "Dar es Salaam, Kinondoni",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=300&fit=crop",
    description: "Bmw 1series year 2012/13 full a/c, full option engine capacity 1598cc full documents bei 14.8m.",
    condition: "Local Used",
    transmission: "Automatic",
    sellerYears: "3+ Years on Jiji"
  },
  {
    id: "4",
    title: "Toyota Corolla Fielder 2009 Black",
    price: 12500000,
    location: "Dar es Salaam, Kinondoni",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
    description: "Toyota filder year 2009/10 price:bei 12.5m transmission_manual cc 1490 sport rims android tv.",
    condition: "Local Used",
    transmission: "Automatic"
  },
  {
    id: "5",
    title: "iPhone 14 Pro Max 256GB",
    price: 2800000,
    location: "Arusha",
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop",
    description: "Brand new iPhone 14 Pro Max with full warranty. Deep Purple color, 256GB storage.",
    condition: "Brand New"
  },
  {
    id: "6",
    title: "Samsung Galaxy S23 Ultra",
    price: 2400000,
    location: "Mwanza",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
    description: "Samsung Galaxy S23 Ultra 256GB. Phantom Black, excellent condition with box and accessories.",
    condition: "Local Used"
  },
  {
    id: "7",
    title: "3 Bedroom Apartment for Rent",
    price: 800000,
    location: "Dodoma",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    description: "Spacious 3 bedroom apartment in prime location. Modern finishes, parking available.",
    condition: "For Rent"
  },
  {
    id: "8",
    title: "Leather Sofa Set - 7 Seater",
    price: 1500000,
    location: "Mbeya",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    description: "Genuine leather sofa set, 7 seater (3+2+2). Brown color, excellent condition.",
    condition: "Local Used"
  },
  {
    id: "9",
    title: "MacBook Pro M2 2023",
    price: 4500000,
    location: "Tanga",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    description: "MacBook Pro 14-inch M2 Pro chip, 16GB RAM, 512GB SSD. Space Gray with AppleCare+.",
    condition: "Brand New"
  },
  {
    id: "10",
    title: "Honda CR-V 2015 Silver",
    price: 45000000,
    location: "Morogoro",
    image: "https://images.unsplash.com/photo-1568844293986-8c3a88a76f22?w=400&h=300&fit=crop",
    description: "Honda CR-V 2015 model, low mileage, excellent condition. Full service history.",
    condition: "Local Used",
    transmission: "Automatic"
  },
  {
    id: "11",
    title: "PlayStation 5 Console",
    price: 1800000,
    location: "Zanzibar",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    description: "Sony PlayStation 5 Disc Edition. Comes with 2 controllers and 3 games.",
    condition: "Local Used"
  },
  {
    id: "12",
    title: "Ladies Designer Handbag",
    price: 350000,
    location: "Kilimanjaro",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
    description: "Authentic designer handbag. Black leather with gold hardware. Perfect condition.",
    condition: "Brand New"
  }
];

export const categories = [
  { name: "Vehicles", count: 36730, icon: "🚗" },
  { name: "Property", count: 27549, icon: "🏠" },
  { name: "Mobile Phones & Tablets", count: 30591, icon: "📱" },
  { name: "Electronics", count: 59401, icon: "💻" },
  { name: "Home, Furniture & Appliances", count: 73124, icon: "🛋️" },
  { name: "Fashion", count: 33211, icon: "👗" },
  { name: "Beauty & Personal Care", count: 7805, icon: "💄" },
  { name: "Services", count: 1476, icon: "🔧" },
  { name: "Repair & Construction", count: 13838, icon: "🔨" },
  { name: "Commercial Equipment", count: 6691, icon: "⚙️" },
  { name: "Leisure & Activities", count: 6925, icon: "🎮" },
  { name: "Babies & Kids", count: 2921, icon: "👶" },
];

export const regions = [
  "Dar es Salaam",
  "Arusha",
  "Mwanza",
  "Dodoma",
  "Mbeya",
  "Tanga",
  "Morogoro",
  "Kilimanjaro",
  "Kigoma",
  "Tabora",
  "Manyara",
  "Shinyanga",
  "Iringa",
  "Mtwara",
  "Ruvuma",
  "Zanzibar",
  "Pwani",
  "Singida"
];
