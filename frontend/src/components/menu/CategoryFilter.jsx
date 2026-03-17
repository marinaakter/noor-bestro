import { menuCategories } from "../../constants/menuCategories";
import { getFilterButtonClasses } from "../../styles/uiTokens";

function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {menuCategories.map((category) => (
        <button key={category.value} type="button" onClick={() => onChange(category.value)} className={getFilterButtonClasses(activeCategory === category.value)}>
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
