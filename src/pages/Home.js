import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { Page } from '../components/Page';
import { Pagination } from '../components/Pagination';
import '../styles/pages/home.scss'

export const Home = () => {
    const [searchParams]= useSearchParams()
    const navigate = useNavigate();
    const [total, setTotal] = useState(0)
    const [index, setIndex] = useState(searchParams.get('page')-1||0)
    
    useEffect(() => {
       if(searchParams.get('page')==='0'){
            navigate('/')
        }else{
            setIndex(searchParams.get('page')-1)
        }
    }, [searchParams]);
    


    return (
        <div className='home'>
            <Pagination changeIndex={setIndex} index={index} limit={Math.floor(total/15)}/>
            <Page index={index*15} total={setTotal}/>
        </div>
    )
}