import './App.scss';
import { Home } from './pages/Home';
import { Suspense } from 'react';
import { Loader } from './components/Loader';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Details } from './pages/Details';

function App() {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <div className="App">
          <Routes>
            <Route path='/pokemons' element={<Home/>}/>
            <Route path='/pokemon/:name' element={<Details/>}/>
            <Route path='*' element={<Navigate replace to="/pokemons?page=1"/>}/>
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
