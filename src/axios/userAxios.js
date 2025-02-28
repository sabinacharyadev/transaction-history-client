// API SERVER URL
import axios from "axios";

const API_BASE_URL = import.meta.env.PROD
  ? ""
  : import.meta.env.VITE_BASE_API_URL;

const USER_ENDPOINT = "/api/users";

// CREATE | POST
export const createUser = (userObject) => {
  const response = axios
    .post(API_BASE_URL + USER_ENDPOINT, userObject)
    .then((res) => res.data)
    .catch((error) => error.message);

  return response;
};
