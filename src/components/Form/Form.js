import { dietLabels } from "../../data";
import "./Form.css";

const Form = ({ query, setQuery, getRecipes, dietLabel, setDietLabel }) => {
  const inputChangeHandler = (event) => {
    setQuery(event.target.value);
  };
  const optionChangeHandler = (event) => {
    setDietLabel(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="search_form" onSubmit={submitHandler}>
        <input
          type="search"
          placeholder="Enter the ingredient"
          value={query}
          onChange={inputChangeHandler}
        />
        <button onClick={getRecipes}>Search</button>
        <select onChange={optionChangeHandler} value={dietLabel}>
          {dietLabels.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Form;
