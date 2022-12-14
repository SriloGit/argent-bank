import axios from "axios";

const BASE_URL= 'http://localhost:3001/api/v1'

/**
 * Instance axios
 */
const instanceAxios = axios.create({
  baseURL: BASE_URL
})

instanceAxios.interceptors.request.use(config => {
  config.headers.accept = 'application/json'
  return config
})

export default instanceAxios

const tokenName = 'token'

/**
 * 
 * @returns token value
 */
export function getToken() {
  return localStorage.getItem(tokenName)
}

/**
 * setToken : Change the token value
 * @param value : Token
 */
export function setToken (value) {
  localStorage.setItem(tokenName, value)
}

/**
 * function getProfile
 * @returns Profile data
 */
export async function getProfile() {
  const dataRequest = {}
  const configAxios = {
    headers:{
    //'accept':'application/json',
    authorization:'Bearer'+ getToken()
    }
  }
      return instanceAxios.post('user/profile',dataRequest, configAxios)

}
const bankUserFirstName = 'firstName'
const bankUserLastName = 'lastName'

/**
 * 
 * @returns First name value
 */
export function getFirstName() {
  return localStorage.getItem(bankUserFirstName)
}
/**
 * 
 * @returns Last name value
 */
 export function getLastName() {
  return localStorage.getItem(bankUserLastName)
}

/**
 * setFirstName : Change the first name
 * @param value : New first name
 */
export function setFirstName (value) {
  localStorage.setItem(bankUserFirstName, value)
}
/**
 * setLastName : Change the last name
 * @param value : New last name
 */
 export function setLastName (value) {
  localStorage.setItem(bankUserLastName, value)
}

/**
 * 
 * @param firstname : New first name
 * @param lastname : new last name
 * @returns instance Axios
 */
export async function setProfile(firstname, lastname) {
  const dataRequest = {
    firstName:firstname, 
    lastName:lastname}
  const configAxios = {
    headers:{
    authorization:'Bearer '+ getToken()
    }
  }
      return instanceAxios.put('user/profile',dataRequest, configAxios)

}