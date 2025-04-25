import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import { refreshUserThuk } from './redux/authorization/authOperations.js';
import { selectIsRefreshing } from './redux/authorization/authSelectors.js';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThuk());
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

  return isRefreshing ? (
    <p>Refresher user...</p>
  ) : (
    <>
      <Header />
      <ToggleTheme />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/todos" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<Register />} redirectTo="/todos" />
            }
          />
          <Route
            path="/cocktails"
            element={
              <PrivateRoute component={<Cocktails />} redirectTo="/login" />
            }
          />
          <Route
            path="/searchcocktails"
            element={
              <PrivateRoute
                component={<SearchCocktails />}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="/cocktails/:cocktailID"
            element={
              <PrivateRoute
                component={<CocktailDetails />}
                redirectTo="/login"
              />
            }
          >
            <Route
              path="another/:type"
              element={
                <PrivateRoute
                  component={<AnotherCocktails />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
          <Route
            path="/photos"
            element={
              <PrivateRoute component={<Photos />} redirectTo="/login" />
            }
          />
          <Route
            path="/todos"
            element={<PrivateRoute component={<Todos />} redirectTo="/login" />}
          />
          <Route
            path="/dice"
            element={<PrivateRoute component={<Dice />} redirectTo="/login" />}
          />
          <Route
            path="/quiz"
            element={<PrivateRoute component={<Quiz />} redirectTo="/login" />}
          />
          <Route
            path="/state"
            element={<PrivateRoute component={<State />} redirectTo="/login" />}
          />
          <Route
            path="/props"
            element={<PrivateRoute component={<Props />} redirectTo="/login" />}
          />
          <Route
            path="/exchange"
            element={
              <PrivateRoute component={<Exchange />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
