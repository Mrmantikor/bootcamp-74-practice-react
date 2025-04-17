import { Link, useLocation } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CocktailsList = ({ cocktails }) => {

  const location = useLocation()
  console.log(location)

  return (

    <Grid>
      {cocktails.map(cocktail => (
        <GridItem key={cocktail.idDrink}>
          <Link to={`/cocktails/${cocktail.idDrink}`} state={location}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
            <p>{cocktail.strGlass}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CocktailsList;
