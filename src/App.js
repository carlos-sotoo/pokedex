import { SWRConfig } from 'swr'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Pokemons } from './pages/Pokemons'
import './App.scss'
import { Details } from './pages/Details'
import { Main } from './pages/Main'
import { Type } from './pages/Type'
import { Error } from './pages/Error'

const fetcher = async (key,...args)=>{

  const url = `https://pokeapi.co/api/v2/${key}`
  return await fetch(url, ...args).then(res=>{
    if(!res.ok)throw Error(res.status)

    return res.json()
  })
}

const App=()=>{
  const navigate = useNavigate();

  return (
    <div className='app'>
      <SWRConfig value={{fetcher,onError:()=>navigate('/error')}}>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<Navigate replace to='/pokemons?page=1'/>}/>
            <Route path='type/:name' element={<Type/>}/>
            <Route path='pokemon/:name' element={<Details/>}/>
            <Route path='pokemons' element={<Pokemons/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </SWRConfig>
    </div>
  )
}

export default App
