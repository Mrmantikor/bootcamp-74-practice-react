import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getCocktailDetails } from '../../service/thecocktaildbAPI';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import CocktailInfo from '../../components/Cocktails/CocktailInfo/CocktailInfo';
import Loader from '../../components/Loader/Loader';
import s from './CocktailDetails.module.css';

const CocktailDetails = () => {
  const { cocktailID } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

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

  const goBackLink = location?.state?.from || location?.state || '/cocktails';

  return (
    <Section>
      <Container>
        <Link to={goBackLink} className={s.link}>
          Go Back
        </Link>
        {cocktail && <CocktailInfo {...cocktail} />}
        <Link
          to={`another/${cocktail?.strAlcoholic}`}
          state={{
            from: location?.state,
          }}
        >
          {' '}
          Show another cocktails
        </Link>
        {error && (
          <Heading
            text={`Something went wrong! ${error}`}
            mTop
            variant="error"
          />
        )}
        {isLoading && <Loader />}
        <Outlet />
      </Container>
    </Section>
  );
};

export default CocktailDetails;
