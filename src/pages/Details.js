import { useParams } from "react-router-dom"
import '../styles/pages/details.scss'
import useSWR from 'swr'

export const Details = () => {
    const {name} = useParams();
    const {data} = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`)

    const pokemon = {
        id:data.id,
        name: data.name,
        sprites: data.sprites.other.home.front_default || data.sprites.other['official-artwork'].front_default || data.sprites.front_default || data.sprites.versions["generation-viii"].icons.front_default,
        types: data.types.map(type=>type.type.name),
        height: data.height*10,
        weight: data.weight*0.1,
        abilities: data.abilities.map(data=>data.ability.name),
        forms: data.forms.map(data=>data.name),
        stats:{}
    }

    data.stats.forEach(stat => {
        pokemon.stats[stat.stat.name] = stat.base_stat
    });

    console.log(pokemon)
    return (
        <div className='details' data-type={pokemon.types[0]}>
            <div className="image">
                <img src={pokemon.sprites} alt={pokemon.name}/>
            </div>
            <div className="data">
                <span className="name" data-type={pokemon.types[0]}>{pokemon.name}</span>
                <table>
                    <tbody>
                        <tr>
                            <td>ID:</td>
                            <td>{fillID(""+pokemon.id)}</td>
                        </tr>
                        <tr>
                            <td>Height:</td>
                            <td>{pokemon.height} cm</td>
                        </tr>
                        <tr>
                            <td>Weight:</td>
                            <td>{pokemon.weight} kg</td>
                        </tr>
                        <tr>
                            <td>Type:</td>
                            <td>{pokemon.types.map(type=><span key={type}> {type} </span>)}</td>
                        </tr>
                        <tr>
                            <td>Abilities:</td>
                            <td>{pokemon.abilities.map(ability=><span key={ability}> {ability} </span>)}</td>
                        </tr>
                        <tr>
                            <td>Forms:</td>
                            <td>{pokemon.forms.map(form=><span key={form}>{form}</span>)}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Stats</td>
                        </tr>
                        <tr>
                            <td><label htmlFor="hp">HP:</label></td>
                            <td><progress id="hp" max={255} value={pokemon.stats.hp}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="attack">Attack:</label></td>
                            <td><progress id="attack" max={190} value={pokemon.stats.attack}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="defense">Defense:</label></td>
                            <td><progress id="defense" max={250} value={pokemon.stats.defense}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="special-attack">Special Attack:</label></td>
                            <td><progress id="special-attack" max={194} value={pokemon.stats["special-attack"]}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="special-defense">Special Defense:</label></td>
                            <td><progress id="special-defense" max={250} value={pokemon.stats["special-defense"]}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="speed">Speed:</label></td>
                            <td><progress id="speed" max={200} value={pokemon.stats.speed}/></td>
                        </tr>
                    </tbody>
                </table>               
            </div>
        </div>
    )
}



const fillID=(value)=>{
    const fill = value.length>=3?value:value.padStart(3,'0');
    return `#${fill}`
}