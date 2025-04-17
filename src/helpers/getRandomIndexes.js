export const getRandomIndexes = (array, number) => {
  const randomIndexesArray = [];
  for (let i = 0; i < number / 2; i++) {
    const randomNumber = Math.floor(Math.random() * array.length);
    if (!randomIndexesArray.includes(randomNumber)) {
      randomIndexesArray.push(randomNumber);
    } else {
      i--;
    }
  }
  return randomIndexesArray;
};
