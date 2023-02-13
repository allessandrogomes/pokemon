import './Card.css'

const Card = ({ name, image, stats }) => {
    return (
        <div className="card">
            <div className="container__img-pokemom">
                <img className="img-pokemom" src={image} />
                <h3>{name}</h3>
            </div>
            <div className="info-pokemom">
                <p>HP: {stats && stats[0] && stats[0].base_stat}</p>
                <p>ATTACK: {stats && stats[1] && stats[1].base_stat}</p>
                <p>DEFENSE: {stats && stats[2] && stats[2].base_stat}</p>
                <p>SPECIAL ATTACK: {stats && stats[3] && stats[3].base_stat}</p>
                <p>SPECIAL DEFENSE: {stats && stats[4] && stats[4].base_stat}</p>
                <p>SPEED: {stats && stats[5] && stats[5].base_stat}</p>
            </div>
            <div></div>
        </div>
    )
}

export default Card