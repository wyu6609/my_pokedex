import React, { useState, useEffect } from "react";
import "./App.css";
import NavComponent from "./NavComponent";
import PokemonPage from "./PokemonPage";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavComponent />
      <PokemonPage />
    </>
  );
}

export default App;
