import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";
const BASE_URL= 'http://localhost:3001/api/v1'

const register = (email, password, firstName, lastName) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
    firstName,
    lastName,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response)
      if (response.data.body.token) {
        localStorage.setItem("token", response.data.body.token)
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("lastName")
  localStorage.removeItem("firstName")
  localStorage.removeItem("token")
  
};

export async function apiPost(endpoint, data){

  const response = await axios({
      method:"post",
      url: BASE_URL + endpoint,
      data: data
  })
  console.log(response)
  return response
}

export async function apiPostProfile(endpoint, token){

  const response = await axios({
      method:"post",
      url: BASE_URL + endpoint,
      headers: {authorization:"Bearer" + token}
  })
  console.log(response)
  return response
}

const AuthService = {
  register,
  login,
  logout,
}

export default AuthService;