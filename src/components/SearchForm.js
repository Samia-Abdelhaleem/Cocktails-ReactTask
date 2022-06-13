import React from "react";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef(null);
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handelSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            {" "}
            search your favorite cocktail
            <input
              type="tex"
              id="name"
              ref={searchValue}
              onChange={searchCocktail}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
