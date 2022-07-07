import { useRef } from 'react'
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom'
import pokemonLogo from '../images/pokemon-logo.png'
import '../styles/components/header.scss'

const types = ["default","normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"]

export const Header = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const { name } = useParams()
    const refBtn = useRef(null)
    const refNav = useRef(null)

    const search = searchParams.get('search') ?? ""

    const handleFilter = e => {
        setSearchParams({ search: e.target.value.toLowerCase() })
    }

    const handleType = e => {
        if (e.target.value === 'default')
            navigate('/pokemons')
        else
            navigate(`/type/${e.target.value}`)
    }

    const handleMenuBtn=(e)=>{
        let btn = refBtn.current
        let nav = refNav.current
        
        if(!btn.className.includes("active")){
            btn.classList.add("active")
            nav.classList.add("active")
        }else{
            btn.classList.remove("active")
            nav.classList.remove("active")
        }
            
    }

    return (
        <header className='header'>
            <Link to='/'><img src={pokemonLogo} alt='pokemon logo' /></Link>
            <button ref={refBtn} className='btn' onClick={handleMenuBtn}><span> </span></button>
            <nav ref={refNav}>
                <input
                    className='searchInput'
                    type='search'
                    placeholder='Enter name or id Pokémon'
                    onChange={handleFilter}
                    value={search}
                />
                <select className='typeInput' onChange={handleType} value={name}>
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
            </nav>
        </header>
    )
}