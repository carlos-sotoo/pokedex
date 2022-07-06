import useSWR from 'swr'
import {Link} from 'react-router-dom'
import { Loader } from "./Loader"
import '../styles/components/card.scss'

export const Card = ({url}) => {
    const { data } = useSWR(`pokemon/${url.split("/").at(-2)}`)

    if(!data)return<div className='pre-loader'><Loader/></div>

    const pokemon = {
        id: data.id,
        name: data.name,
        types: data.types.map(type=>type.type.name),
        sprite: data.sprites.other.home.front_default || data.sprites.other['official-artwork'].front_default || data.sprites.front_default || data.sprites.versions["generation-viii"].icons.front_default,
    }

    return (
        <div className='card' data-type={pokemon.types[0]}>
            <header>{pokemon.name}</header>
            <div className='content'>
                <h3 className='number'>{fillID(""+pokemon.id)}</h3>
                <img src={pokemon.sprite} alt={data.name}/>
            </div>
            <footer>{pokemon.types.map(type=><div className="type" data-type={type} key={type}>{type}</div>)}
                <Link className='details-btn' to={`/pokemon/${pokemon.name}`}>Details</Link>
            </footer>
        </div>
    )
}

const fillID=(value)=>{
    const fill = value.length>=3?value:value.padStart(3,'0');
    return `#${fill}`
}