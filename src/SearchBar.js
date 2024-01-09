import "./SearchBar.css";
import { useState } from "react";
function SearchBar({ handleSubmit }) {
  let [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(term);
  };
  return (
    <div className="SearchBar">
      <h1>Weather</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Use this site to get your weather</label>
        <input
          onChange={handleChange}
          value={term}
          type="text"
          placeholder="location"
        />
        <button>Search</button>
      </form>
    </div>
  );
}
export default SearchBar;
