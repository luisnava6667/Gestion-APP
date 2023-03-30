import axios from "axios";
export const gestionApp = axios.create({
  baseURL: 'https://localhost:3001/local'
})
