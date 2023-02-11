import './Card.css'

const Card = ({ name, image }) => {
    return (
        <div className="card">
            <div className="container__img-pokemom">
                <img className="img-pokemom" src={image} />
                <h3>{name}</h3>
            </div>
            <div className="info-pokemom">
                <p>HP: 100</p>
                <p>ATTACK: 200</p>
                <p>DEFENSE: 50</p>
                <p>SPECIAL ATTACK: 30</p>
                <p>SPECIAL DEFENSE: 20</p>
                <p>SPEED: 180</p>
            </div>
        </div>
    )
}

export default Card