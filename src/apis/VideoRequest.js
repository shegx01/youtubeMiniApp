import axios from "axios";

const KEY = "AIzaSyAcBDZJQCpJJ674uwNRl0WXlTuB3uc4Mqc";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});