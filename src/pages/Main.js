import { Outlet } from 'react-router-dom'

export const Main = () => {

    return (
        <>
            <main className='main'>
                <Outlet/>
            </main>
            <footer className='footer'>
            Created by <a href='https://carlos-soto.netlify.app' target='blank'>Carlos Fernando Soto</a> 
            </footer>
        </>
    )
}