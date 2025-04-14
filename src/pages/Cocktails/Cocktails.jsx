import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import { getRandomCocktails } from '../../service/thecocktaildbAPI';
import Loader from '../../components/Loader/Loader';
import Heading from '../../components/Heading/Heading';
import CocktailsList from '../../components/Cocktails/CocktailsList';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getRandomCocktails(controller.signal);
        setCocktails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <Section>
      <Container>
        {cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
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

export default Cocktails;
