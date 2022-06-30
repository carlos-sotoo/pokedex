import { useNavigate } from "react-router-dom"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../styles/components/pagination.scss'

export const Pagination = ({changeIndex, index, limit}) => {
    const navigate = useNavigate()

    const handlePrev=()=>{
        navigate(`/pokemons?page=${index}`)
    }

    const handleNext=()=>{
        navigate(`/pokemons?page=${index<limit?index+2:index+1}`)
    }

    return (
        <div className='pagination'>
            <button className="prev" onClick={handlePrev}><AiOutlineArrowLeft className="icon"/></button>
            <div className="page">{index+1}</div>
            <button className="next" onClick={handleNext}><AiOutlineArrowRight className="icon"/></button>
        </div>
    )
}