import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74',
  },
  params: {
    orientation: 'landscape',
    per_page: '9',
  },
});

export const getPhotos = async (query, page) => {
  const { data } = await instance.get(`search`, { params: { query, page } });
  return data;
};
