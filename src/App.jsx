import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(()=> import('./pages/Home/Home.jsx'));
const State = lazy(()=> import('./pages/State/State'));
const Props = lazy(()=> import('./pages/Props/Props'));
const Quiz = lazy(()=> import('./pages/Quiz/Quiz'));
const Dice = lazy(()=> import('./pages/Dice/Dice'));
const Todos = lazy(()=> import('./pages/Todos/Todos'));
const Register = lazy(()=> import('./pages/Register/Register'));
const Login = lazy(()=> import('./pages/Login/Login.jsx'));
const Photos = lazy(()=> import('./pages/Photos/Photos.jsx'));
import Header from './components/Header/Header.jsx';
const Cocktails = lazy(()=> import('./pages/Cocktails/Cocktails.jsx'));
const CocktailDetails = lazy(()=> import('./pages/CocktailDetails/CocktailDetails.jsx'));
const SearchCocktails = lazy(()=> import( './pages/SearchCocktails/SearchCocktails.jsx'));
const AnotherCocktails = lazy(()=> import( './components/Cocktails/AnotherCocktails/AnotherCocktails.jsx'));

import Loader from './components/Loader/Loader.jsx';

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/searchcocktails" element={<SearchCocktails />} />
          <Route path="/cocktails/:cocktailID" element={<CocktailDetails />}>
            <Route path="another/:type" element={<AnotherCocktails/>}/>
          </Route>
          <Route path="/photos" element={<Photos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/state" element={<State />} />
          <Route path="/props" element={<Props />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
