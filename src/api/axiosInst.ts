import axios from "axios";

const instance = axios.create({
  baseURL: "https://phil.dev.vshleifman.co.uk/api",
});

export default instance;
