import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import Form from '../../components/Form/Form.jsx';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCocktailsByQuery } from '../../service/thecocktaildbAPI.js';
import Heading from '../../components/Heading/Heading.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import CocktailsList from '../../components/Cocktails/CocktailsList.jsx';

const SearchCocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('query')

  useEffect(()=>{

    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getCocktailsByQuery(query);
        setCocktails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();

  }, [query])

  const onSubmit = (query) =>{
    setSearchParams({ query })
  }

    return (
        <Section>
          <Container>
            <Form onSubmit={onSubmit}/>
            {(cocktails.length === 0 && query && !isLoading) ? <Heading mTop text={`We didnt find any cocktail ${query}`} variant="info"/> : <CocktailsList cocktails={cocktails} />}
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

export default SearchCocktails;