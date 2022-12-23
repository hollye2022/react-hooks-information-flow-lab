import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(category){
    setSelectedCategory(category)
  }


  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick}/>
      <Filter onCategoryChange={onCategoryChange}/>
      <ShoppingList selectedCategory={selectedCategory} items={itemData} />
    </div>
  );
}

export default App;
