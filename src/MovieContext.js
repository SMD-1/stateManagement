import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "The Tomorrow war",
      price: "$10",
      id: "121221",
    },
    {
      name: "Lucy",
      price: "$10",
      id: "343443",
    },
    {
      name: "Tenet",
      price: "$10",
      id: "565665",
    },
    {
      name: "The Last ship",
      price: "$20",
      id: "787887",
    },
  ]);

  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
