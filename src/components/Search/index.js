import './Search.css'

const Search = ({ pokemonFilter }) => {
    return (
        <div className='container__search'>
            <h2>Search for your Pokémom</h2>
            <input onChange={(e)=>pokemonFilter(e.target.value)} placeholder='Pokémon name'></input>
        </div>
    )
}

export default Search