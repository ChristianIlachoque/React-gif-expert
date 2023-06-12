import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <div>
      <h1>Hello Wold</h1>

      <AddCategory addCategory={addCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
