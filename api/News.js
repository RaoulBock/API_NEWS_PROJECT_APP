import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2/"
});

// https://newsapi.org/v2/top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9
