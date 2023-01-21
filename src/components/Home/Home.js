import Form from "../Form/Form";
import Recipes from "../Recipes/Recipes";

const Home = (props) => {
  const { query, setQuery, recipes, dietLabel, setDietLabel, getRecipes } =
    props;

  return (
    <div className="container">
      <h1>Food Recipe Application</h1>
      <Form
        setQuery={setQuery}
        query={query}
        getRecipes={getRecipes}
        dietLabel={dietLabel}
        setDietLabel={setDietLabel}
      />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default Home;
