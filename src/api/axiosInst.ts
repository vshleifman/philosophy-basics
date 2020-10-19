import axios from "axios";

const instance = axios.create({
  baseURL: "https://phildb.dev.vshleifman.co.uk/api",
});

export default instance;
