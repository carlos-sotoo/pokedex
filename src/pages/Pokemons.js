import { useSearchParams } from "react-router-dom";
import useSWR from 'swr'
import { Header } from "../components/Header";
import { Loader } from '../components/Loader'
import { Page } from '../components/Page'
import { Pagination } from "../components/Pagination";
import '../styles/pages/pokemons.scss'

export const Pokemons = () => {
    const [searchPage, setSearchPage] = useSearchParams()
    const currentPage = parseInt(searchPage.get('page')) || 1
    const searchPokemon = searchPage.get('search') ?? ""
    
    const { data } = useSWR(searchPokemon?'pokemon?limit=10000':`pokemon?limit=${15}&offset=${(currentPage-1)*15}`)

    if(!data) return <Loader/>

    const handleButton=(value)=>{
        setSearchPage({'page':value})
    }
    
    return (
        <div className='pokemons'>
            <Header/>
            {searchPokemon?null:
                <Pagination index={currentPage} limit={data.count/15} handleButton={handleButton}/>
            }
            <Page pokemons={data.results.filter(poke=>poke.name.includes(searchPokemon))}/>
        </div>
    )
}