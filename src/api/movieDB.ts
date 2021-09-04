import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a301e4e4161db41ecbf925937c7acadc',
    language: 'es-ES'
  }
});

export default movieDB;