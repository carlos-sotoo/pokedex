import { Card } from "./Card"
import '../styles/components/page.scss'

export const Page = ({pokemons}) => {
    return (
        <div className='page'>
             {pokemons.map(poke=><Card key={poke.name} url={poke.url}/>)}
        </div>
    )
}