import { Route, Routes } from 'react-router-dom';
import State from './pages/State/State';
import Props from './pages/Props/Props';
import Quiz from './pages/Quiz/Quiz';
import Dice from './pages/Dice/Dice';
import Todos from './pages/Todos/Todos';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login.jsx';
import Photos from './pages/Photos/Photos.jsx';
import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Cocktails from './pages/Cocktails/Cocktails.jsx';
import CocktailDetails from './pages/CocktailDetails/CocktailDetails.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:cocktailID" element={<CocktailDetails />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/dice" element={<Dice />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/state" element={<State />} />
        <Route path="/props" element={<Props />} />
      </Routes>
    </>
  );
}

export default App;
