import axios from "axios";
const Url = "https://api.themoviedb.org/3";
const KEY = process.env.REACT_APP_KEY_API;

const instance = axios.create({
  baseURL: Url,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${KEY}`,
  },
});

export default instance;