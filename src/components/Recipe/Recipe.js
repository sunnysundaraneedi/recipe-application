import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./Recipe.css";

const Recipe = () => {
  const { recipeID } = useParams();
  const navigate = useNavigate();
  console.log(recipeID);

  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);

  const url = `https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=3beeb72e&app_key=6b0900d7d7637518aa9678011c78c02b`;

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios.get(url);
        console.log(data);
        setRecipe(data.recipe);
        setLoading(false);
      } catch (error) {
        console.log("Error is", error.code);
      }
    };
    getRecipe();
    // eslint-disable-next-line
  }, [recipeID]);
  if (loading || !url) {
    return <Spinner />;
  }
  console.log(recipe);
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="recipe_container">
      <button className="btn" onClick={clickHandler}>
        back
      </button>
      <h1>
        {recipe.label} Recipe | {recipe.label}
      </h1>
      <img src={recipe.image} alt={recipe.label} />
      <div className="about">
        <h3>About {recipe.label}</h3>

        <p>
          <b>1. </b>
          {`${recipe.label} is  of  ${recipe.cuisineType} cuisine`}
        </p>

        <p>
          <b>2. </b>It is
          {recipe.healthLabels.map((label) => {
            return <span> {label},</span>;
          })}
        </p>
        <p>
          <b>3. </b>
          {`It has ${recipe.calories.toFixed(0)} calories`}
        </p>
        <p>
          <b>4. Caution</b> it contains
          {recipe.cautions.map((label) => {
            return <span> {label},</span>;
          })}
        </p>
      </div>
      <div className="howto">
        <h3>How to Make {recipe.label}</h3>
        {recipe.ingredientLines.map((line, i) => (
          <p key={i}>
            <b>{i + 1}.</b> {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
