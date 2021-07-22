import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
    setName(e.target.value === "");
    setPrice(e.target.value === "");
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input type="text" name="name" value={name} onChange={updateName} />
        <input
          type="number"
          name="price"
          value={price}
          onChange={updatePrice}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
