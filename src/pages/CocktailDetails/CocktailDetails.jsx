import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCocktailDetails } from '../../service/thecocktaildbAPI';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CocktailInfo from '../../components/Cocktails/CocktailInfo/CocktailInfo';
import Loader from '../../components/Loader/Loader';

const CocktailDetails = () => {
  const { cocktailID } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getCocktailDetails(cocktailID);
        setCocktail(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [cocktailID]);
  return (
    <Section>
      <Container>
        {cocktail && <CocktailInfo {...cocktail} />}
        {error && (
          <Heading
            text={`Something went wrong! ${error}`}
            mTop
            variant="error"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default CocktailDetails;
