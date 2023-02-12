import axios from "axios";
import { useState } from "react";
import Card from '../Card';
import Search from '../Search'
import './PokemomSearch.css'

const PokemomSearch = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    const getPokemon = () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
            .then((res) => {
                setPokemonData(res.data);
            });
    };

    return (

        <div className="container__content">
            <Search handleSubmit={handleSubmit} pokemonName={pokemonName} setPokemonName={setPokemonName} />
            <Card name={pokemonData.name} image={pokemonData.sprites && pokemonData.sprites.front_default} stats={pokemonData.stats} />
        </div>
    );
};

export default PokemomSearch