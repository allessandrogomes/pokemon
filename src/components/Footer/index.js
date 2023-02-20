import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='text__footer'>
                <a target={'_blank'} href='https://allessandrogomes.github.io/portfolio/'><h4>Web Development by Alessandro Gomes</h4></a>
            </div>
            <div className='links__footer'>
                <a target={'_blank'} href='https://github.com/allessandrogomes'><img src='./images/github-icon.svg' /></a>
                <a target={'_blank'} href='https://www.linkedin.com/in/alessandro-da-silva-gomes-a82286240/'><img src='./images/linkedin-icon.svg' /></a>
            </div>
            <div className='pokeapi-link__footer'>
                <a target={'_blank'} href='https://pokeapi.co'><h5>PokéApi</h5></a>
            </div>
        </footer>
    )
}

export default Footer