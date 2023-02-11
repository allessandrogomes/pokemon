import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import PokemomSearch from "./components/PokemomSearch";


function App() {

  return (
    <div className="App">
      <Header />
      <PokemomSearch />
    </div>
  );
}

export default App;
