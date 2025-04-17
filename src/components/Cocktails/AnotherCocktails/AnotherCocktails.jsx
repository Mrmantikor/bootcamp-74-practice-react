import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilteredCocktailsByAlcoholic } from '../../../service/thecocktaildbAPI.js';
import CocktailsList from '../CocktailsList.jsx';
import Heading from '../../Heading/Heading.jsx';
import Loader from '../../Loader/Loader.jsx';

const AnotherCocktails = () => {
  const { type } = useParams()

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(()=>{
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getFilteredCocktailsByAlcoholic(type);
        setCocktails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [type])


    return (
        <>
          {cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
          {error && (
            <Heading
              text={`Something went wrong! ${error}`}
              mTop
              variant="error"
            />
          )}
          {isLoading && <Loader />}
        </>
    );
};

export default AnotherCocktails;