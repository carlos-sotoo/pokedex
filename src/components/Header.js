import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom'
import pokemonLogo from '../images/pokemon-logo.png'
import '../styles/components/header.scss'

export const Header = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const { name } = useParams()
    const types = [ "default",
                    "normal",
                    "fighting",
                    "flying",
                    "poison",
                    "ground",
                    "rock",
                    "bug",
                    "ghost",
                    "steel",
                    "fire",
                    "water",
                    "grass",
                    "electric",
                    "psychic",
                    "ice",
                    "dragon",
                    "dark",
                    "fairy",
                    "unknown",
                    "shadow"]

    const search = searchParams.get('search') ?? ""

    const handleFilter = e =>{
        setSearchParams({search:e.target.value.toLowerCase()})
    }

    const handleType = e =>{
        if(e.target.value === 'default')
            navigate('/pokemons')
        else
            navigate(`/type/${e.target.value}`)
    }

    return (
        <header className='header'>
            <Link to='/'><img src={pokemonLogo} alt='pokemon logo'/></Link>
             
            <input
                className='searchInput'
                type='search' 
                placeholder='Enter name or id Pokémon' 
                onChange={handleFilter}
                value={search}
            />
            <select className='typeInput' onChange={handleType} value={name}>
                {types.map(type=><option key={type} value={type}>{type}</option>)}
            </select>
        </header>
    )
}