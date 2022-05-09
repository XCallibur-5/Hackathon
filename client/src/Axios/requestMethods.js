import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
let foundUser
const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          foundUser = JSON.parse(loggedInUser); 
        //   foundUser is JSON object
        
        }
        const TOKEN = foundUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});