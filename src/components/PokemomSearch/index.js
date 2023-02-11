import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from '../Card'
import Search from '../Search'
import './PokemomSearch.css'

const PokemomSearch = () => {
    console.log(axios.get("https://pokeapi.co/api/v2/pokemon?limit=50"))
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        console.log(endpoints);
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };
    return (
        <div className="container__content">
            <Search />
            <div className="container__cards">
                {pokemons.map((pokemon, key) => <Card name={pokemon.data.name} image={pokemon.data.sprites.front_default} key={key} />)}
            </div>
        </div>
    )
}

export default PokemomSearch