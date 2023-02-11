import './Card.css'

const Card = ({ name, image, types, stats }) => {
    return (
        <div className="card">
            <div className="container__img-pokemom">
                <img className="img-pokemom" src={image} />
                <h3>{name}</h3>
                <h6>{types[0].type.name}</h6>
            </div>
            <div className="info-pokemom">
                <p>HP: {stats[0].base_stat}</p>
                <p>ATTACK: {stats[1].base_stat}</p>
                <p>DEFENSE: {stats[2].base_stat}</p>
                <p>SPECIAL ATTACK: {stats[3].base_stat}</p>
                <p>SPECIAL DEFENSE: {stats[4].base_stat}</p>
                <p>SPEED: {stats[5].base_stat}</p>
            </div>
        </div>
    )
}

export default Card