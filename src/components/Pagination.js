import '../styles/components/pagination.scss'

import { AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
export const Pagination = ({ index,limit, handleButton}) => {
    return (
        <div className='pagination'>
            <button className='prev' onClick={()=>handleButton(index>1?index-1:index)}>
                <AiFillCaretLeft className='icon'/>
            </button>
            <div className='page'>{index}</div>
            <button className='next' onClick={()=>handleButton(index<limit?index+1:index)}>
            <AiFillCaretRight className='icon'/>
            </button>
        </div>
    )
}