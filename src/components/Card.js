import { Link } from 'react-router-dom'
import useSWR from 'swr'
import '../styles/components/card.scss'

export const Card = ({url}) => {
    const {data} = useSWR(url)

    let pokemon = {
        id:data.id,
        name: data.name,
        sprites: data.sprites.other.home.front_default || data.sprites.other['official-artwork'].front_default || data.sprites.front_default || data.sprites.versions["generation-viii"].icons.front_default,
        types: data.types.map(type=>type.type.name),

    }

    return (
            <Link to={`/pokemon/${pokemon.name}`} className='card' data-type={pokemon.types[0]}>
                <header>{pokemon.name}</header>
                <div className='content'>
                    <h3 className='number'>{fillID(""+pokemon.id)}</h3>
                    <img src={pokemon.sprites} alt={data.name}/>
                </div>
                <footer>{pokemon.types.map(type=><div className="type" data-type={type} key={type}>{type}</div>)}</footer>
            </Link>
    )
}


const fillID=(value)=>{
    const fill = value.length>=3?value:value.padStart(3,'0');
    return `#${fill}`
}