import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const id = recipe.uri.split("_")[1];
  return (
    <div className="card">
      <Link to={`/${id}`}>
        <img src={recipe.image} alt={recipe.label} style={{ width: "100%" }} />
      </Link>
      <div className="title-container">
        <h4>
          <b>{recipe.label}</b>
        </h4>
      </div>
    </div>
  );
};

export default RecipeCard;
