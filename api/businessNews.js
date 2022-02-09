import axios from "axios";

export default axios.create({
  baseURL: "https://newsdata.io/api/1/"
});

//https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&category=sports,health
