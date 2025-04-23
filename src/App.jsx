import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const State = lazy(() => import('./pages/State/State'));
const Props = lazy(() => import('./pages/Props/Props'));
const Quiz = lazy(() => import('./pages/Quiz/Quiz'));
const Dice = lazy(() => import('./pages/Dice/Dice'));
const Todos = lazy(() => import('./pages/Todos/Todos'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Photos = lazy(() => import('./pages/Photos/Photos.jsx'));
const Exchange = lazy(() => import('./pages/Exchange/Exchange.jsx'));
import Header from './components/Header/Header.jsx';
const Cocktails = lazy(() => import('./pages/Cocktails/Cocktails.jsx'));
const CocktailDetails = lazy(() =>
  import('./pages/CocktailDetails/CocktailDetails.jsx')
);
const SearchCocktails = lazy(() =>
  import('./pages/SearchCocktails/SearchCocktails.jsx')
);
const AnotherCocktails = lazy(() =>
  import('./components/Cocktails/AnotherCocktails/AnotherCocktails.jsx')
);

import Loader from './components/Loader/Loader.jsx';
import ToggleTheme from './components/ToggleTheme/ToggleTheme.jsx';

import { fetchBaseCurrency } from './redux/currency/operation.js';
import { setBaseCurrency } from './redux/currency/currencySlice.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Header />
      <ToggleTheme />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/searchcocktails" element={<SearchCocktails />} />
          <Route path="/cocktails/:cocktailID" element={<CocktailDetails />}>
            <Route path="another/:type" element={<AnotherCocktails />} />
          </Route>
          <Route path="/photos" element={<Photos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/state" element={<State />} />
          <Route path="/props" element={<Props />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
