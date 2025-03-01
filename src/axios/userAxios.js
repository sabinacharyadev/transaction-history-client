// API SERVER URL
import axios from "axios";

const API_BASE_URL = import.meta.env.PROD
  ? ""
  : import.meta.env.VITE_BASE_API_URL;

const USER_ENDPOINT = "/api/users";

// CREATE | Signup User | POST
export const createUser = (userObject) => {
  const response = axios
    .post(`${API_BASE_URL}${USER_ENDPOINT}/signup`, userObject)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};

// CREATE | Login user | POST

export const loginUser = (email, password) => {
  const response = axios
    .post(`${API_BASE_URL}${USER_ENDPOINT}/login`, { email, password })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};
