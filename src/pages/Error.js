import { useNavigate } from 'react-router-dom'
import '../styles/pages/error.scss'
export const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='error'>
            <h1>Error 404</h1>
            <div className="pokeball">
                <div className="pokeball__button"></div>
            </div>
            <h2>Page not found</h2>

            <button onClick={()=>navigate('/')}>Go home</button>
        </div>
    )
}