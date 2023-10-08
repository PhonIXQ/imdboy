import axios from "axios";

// const baseUrl = 'https://imdb8.p.rapidapi.com'
const baseUrl = 'https://jsonplaceholder.typicode.com'

const options = {
   headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
   }
};

export const fetchData = async (url) => {
   // const { data } = await axios.get(`${baseUrl}/${url}`, options);

   const { data } = await axios.get(`${baseUrl}/${url}`)

   return data;
}