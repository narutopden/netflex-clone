import axios from "axios";
//  baseURL to make requuest to the movie
const instance = axios.create({
  baseURL: "https://imdb-api.com/en/API/",
});

export default instance;