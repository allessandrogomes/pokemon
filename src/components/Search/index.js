import './Search.css'

const Search = ({ handleSubmit, pokemonName, setPokemonName }) => {
    return (
        <form className='container__search' onSubmit={handleSubmit}>
            <h2>Search for your Pokémom</h2>
            <input type={"text"} value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder='Pokémon name'></input>
            <input className='input-submit' type="submit" value="Submit" />
        </form>
    )
}

export default Search