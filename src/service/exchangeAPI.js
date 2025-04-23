import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data',
  headers: { apikey: 'qwA9ng50qqAGOg97fG0ll8jUjidiWPdc' },
});

export const exchangeCurrency = async credentials => {
  const {
    data: { query, info, result },
  } = await instance.get('/convert', { params: credentials });
  return { ...query, rate: info.rate, result };
};
