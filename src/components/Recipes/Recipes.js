import RecipeCard from "../RecipeCard/RecipeCard";
import "./Recipes.css";

const Recipes = ({ recipes }) => {
  if (recipes.length === 0) {
    return <div className="empty">Search for healthy Recipes</div>;
  }

  return (
    <div className="recipes_container">
      {recipes.map(({ recipe }) => (
        <RecipeCard recipe={recipe} key={recipe.label} />
      ))}
    </div>
  );
};

export default Recipes;
