import { categories } from "@/data/products";

const CategorySidebar = () => {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="bg-card rounded-lg p-4 sticky top-4">
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.name}>
              <button className="w-full text-left px-3 py-2.5 rounded-md hover:bg-secondary transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{category.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {category.count.toLocaleString()} ads
                    </p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategorySidebar;
