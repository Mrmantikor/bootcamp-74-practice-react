export const getEmojisArray = data => {
  const pairedEmojis = [...data, ...data];
  for (let i = pairedEmojis.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pairedEmojis[i];
    pairedEmojis[i] = pairedEmojis[j];
    pairedEmojis[j] = temp;
  }
  return pairedEmojis;
};
