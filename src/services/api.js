import axios from 'axios'

const BASE_URL= 'http://localhost:3001/api/v1'

async function apiPost(endpoint, data){
    /*axios.post(BASE_URL + endpoint , data)
    .then((response) => {
        console.log(response.data.body.token)
        return response.data.body.token
    }) 
    .catch((error) =>{
        return error
    })*/

    const response = await axios({
        method:"post",
        url: BASE_URL + endpoint,
        data: data
    })
    console.log(response)
    return response
}
async function apiPostProfile(endpoint, token){
    /*axios.post(BASE_URL + endpoint , data)
    .then((response) => {
        console.log(response.data.body.token)
        return response.data.body.token
    }) 
    .catch((error) =>{
        return error
    })*/

    const response = await axios({
        method:"post",
        url: BASE_URL + endpoint,
        headers: {authorization:"Bearer" + token}
    })
    console.log(response)
    return response
}

export { apiPost, apiPostProfile }