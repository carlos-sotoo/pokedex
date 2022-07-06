import { useParams, useSearchParams } from "react-router-dom"
import useSWR from "swr"
import { Header } from "../components/Header"
import { Loader } from "../components/Loader"
import { Page } from "../components/Page"
import '../styles/pages/type.scss'

export const Type = () => {
    const {name} = useParams()
    const [searchParams, ] = useSearchParams()
    const search = searchParams.get('search') ?? ""
    const {data} = useSWR(`type/${name}`)

    if(!data) return <Loader/>

    return (
        <div className='type'>
            <Header/>
            <Page pokemons={data.pokemon.map(poke=>poke.pokemon).filter(poke=>poke.name.includes(search))}/>
        </div>
    )
}