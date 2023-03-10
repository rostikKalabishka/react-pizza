import { useState } from "react";

export function Categories() {
  const [activeIndex, setActiveIndex] = useState();
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
