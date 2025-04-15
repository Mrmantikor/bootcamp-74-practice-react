import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

const urls = Array.from({ length: 12 }, () => '/random.php');

export const getRandomCocktails = async ({ signal }) => {
  const promises = urls.map(async url => {
    const { data } = await instance.get(url, { signal });
    return data;
  });
  const data = await Promise.all(promises);
  return data.map(({ drinks }) => {
    const { idDrink, strDrink, strDrinkThumb, strGlass } = drinks[0];
    return { idDrink, strDrink, strDrinkThumb, strGlass };
  });
};

export const getCocktailDetails = async cocktailID => {
  const { data } = await instance.get(`/lookup.php?i=${cocktailID}
`);
  const {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
  } = data.drinks[0];
  return {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
  };
};

export const getCocktailsByQuery = async (query) => {
  const { data } = await instance.get(`search.php?s=${query}`);

  return data.drinks? data.drinks.map(({ idDrink, strDrink, strDrinkThumb, strGlass }) => {
    return { idDrink, strDrink, strDrinkThumb, strGlass };
  }) : []
};

export const getFilteredCocktailsByAlcoholic = async (type) => {
  const { data } = await instance.get(`filter.php?a=${type}`);

  return data.drinks
};