import useSWR from 'swr'
import { Suspense, useEffect } from 'react';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';

export const Page = ({index, total}) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${15}&offset=${index}`
    const {data} = useSWR(url)

    useEffect(() => {
        total(data.count)
    }, [data]);

    return (
        <div className='page'>
            {data.results.map(poke=>
                <Suspense fallback={<div className='card-loader'><Loader/></div>} key={poke.name}>        
                    <Card url={poke.url}/>
                </Suspense>
            )}
        </div>
    )
}