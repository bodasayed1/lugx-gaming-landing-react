import CategoryCard from "./CategoryCard";
import { categoryImages } from "../data/games";

function CategoryList() {
  return (
    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-5">
      {categoryImages.map((image, index) => (
        <CategoryCard key={index} image={image} />
      ))}
    </div>
  );
}

export default CategoryList;