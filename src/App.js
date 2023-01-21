import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [dietLabel, setDietLabel] = useState("balanced");

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&
      app_id=3beeb72e&app_key=6b0900d7d7637518aa9678011c78c02b&random=true&diet=${dietLabel}`;

  const getRecipes = async () => {
    const { data } = await axios.get(url);
    setRecipes(data.hits);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            query={query}
            setQuery={setQuery}
            recipes={recipes}
            dietLabel={dietLabel}
            setDietLabel={setDietLabel}
            getRecipes={getRecipes}
          />
        }
      />
      <Route path="/:recipeID" element={<Recipe />} />
    </Routes>
  );
}

export default App;
